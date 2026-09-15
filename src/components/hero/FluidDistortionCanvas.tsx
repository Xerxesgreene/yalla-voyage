'use client';

import { useEffect, useRef } from 'react';

interface FluidDistortionCanvasProps {
  imageSrc: string;
}

export function FluidDistortionCanvas({ imageSrc }: FluidDistortionCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: true }) ||
               (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    let animationFrameId: number;

    // Multi-Drop Concentric Liquid Water Wave Fragment Shader
    const vsSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    const fsSource = `
      precision mediump float;
      uniform sampler2D u_image;
      uniform vec3 u_drops[10]; // x, y, age
      uniform vec2 u_resolution;
      uniform vec2 u_imageResolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_mouseIntensity;
      varying vec2 v_texCoord;

      vec2 getCoverUV(vec2 uv, vec2 canvasRes, vec2 imgRes) {
        float canvasAspect = canvasRes.x / canvasRes.y;
        float imgAspect = imgRes.x / imgRes.y;
        vec2 scale = vec2(1.0);
        vec2 origin = vec2(0.5);
        if (canvasAspect > imgAspect) {
          scale = vec2(1.0, imgAspect / canvasAspect);
          origin = vec2(0.5, 0.5);
        } else {
          // On mobile portrait, window X = [0.46, 0.72] puts the open sky on the left and the Arab traveler on the right
          scale = vec2(canvasAspect / imgAspect, 1.0);
          origin = vec2(0.62, 0.5);
        }
        return (uv - origin) * scale + origin;
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;

        vec2 totalOffset = vec2(0.0);

        // 1. Continuous Mouse Trail Fluid Wave
        vec2 mousePos = u_mouse / u_resolution.xy;
        mousePos.y = 1.0 - mousePos.y;
        vec2 mDir = st - mousePos;
        mDir.x *= aspect;
        float mDist = length(mDir);

        float mWave = sin(mDist * 45.0 - u_time * 6.0);
        float mDecay = exp(-mDist * 12.0) * smoothstep(0.2, 0.005, mDist);
        totalOffset += normalize(mDir + vec2(0.0001)) * mWave * mDecay * u_mouseIntensity * 0.012;

        // 2. Concentric Droplet Wave Rings
        for (int i = 0; i < 10; i++) {
          vec3 drop = u_drops[i];
          if (drop.z > 0.0 && drop.z < 2.0) {
            vec2 dropPos = drop.xy / u_resolution.xy;
            dropPos.y = 1.0 - dropPos.y;

            vec2 dir = st - dropPos;
            dir.x *= aspect;

            float dist = length(dir);
            float age = drop.z;

            float waveRadius = age * 0.18;
            float ringDist = abs(dist - waveRadius);

            float wave = sin(dist * 55.0 - age * 12.0);
            float ringEnvelope = exp(-ringDist * 28.0) * exp(-age * 2.2);
            
            totalOffset += normalize(dir + vec2(0.0001)) * wave * ringEnvelope * 0.012;
          }
        }

        vec2 baseUV = getCoverUV(v_texCoord, u_resolution, u_imageResolution);
        vec2 distortedUV = clamp(baseUV + totalOffset, 0.0, 1.0);

        gl_FragColor = texture2D(u_image, distortedUV);
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error('Shader error:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');

    const uImage = gl.getUniformLocation(program, 'u_image');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uImageResolution = gl.getUniformLocation(program, 'u_imageResolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uMouseIntensity = gl.getUniformLocation(program, 'u_mouseIntensity');

    const uDropsLocs: WebGLUniformLocation[] = [];
    for (let i = 0; i < 10; i++) {
      const loc = gl.getUniformLocation(program, `u_drops[${i}]`);
      if (loc) uDropsLocs.push(loc);
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        0, 1,
        1, 1,
        0, 0,
        0, 0,
        1, 1,
        1, 0,
      ]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const img = new Image();
    let imageLoaded = false;
    let imgWidth = 1920;
    let imgHeight = 1080;

    const loadTexture = () => {
      if (imageLoaded) return;
      imgWidth = img.naturalWidth || 1920;
      imgHeight = img.naturalHeight || 1080;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      imageLoaded = true;
    };

    img.onload = loadTexture;
    img.src = imageSrc;
    if (img.complete && img.naturalWidth > 0) {
      loadTexture();
    }

    const drops: Array<{ x: number; y: number; age: number }> = [];
    for (let i = 0; i < 10; i++) {
      drops.push({ x: 0, y: 0, age: 999 });
    }

    let nextDropIndex = 0;
    let targetMouse = { x: -1000, y: -1000 };
    let currentMouse = { x: -1000, y: -1000 };
    let prevMouse = { x: -1000, y: -1000 };
    let mouseIntensity = 0;
    let lastDropTime = 0;
    let startTime = performance.now();

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const x = (e.clientX - rect.left) * dpr;
      const y = (e.clientY - rect.top) * dpr;

      targetMouse.x = x;
      targetMouse.y = y;

      const dx = x - prevMouse.x;
      const dy = y - prevMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      mouseIntensity = Math.min(mouseIntensity + dist * 0.05 + 0.1, 1.5);

      const now = performance.now();
      if (dist > 15 && now - lastDropTime > 40) {
        drops[nextDropIndex] = { x, y, age: 0.01 };
        nextDropIndex = (nextDropIndex + 1) % 10;
        prevMouse.x = x;
        prevMouse.y = y;
        lastDropTime = now;
      }
    };

    const parentEl = canvas.parentElement;
    if (parentEl) {
      parentEl.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    let lastFrameTime = performance.now();

    const render = () => {
      const now = performance.now();
      const dt = (now - lastFrameTime) * 0.001;
      const timeSec = (now - startTime) * 0.001;
      lastFrameTime = now;

      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;
      mouseIntensity *= 0.94;

      for (let i = 0; i < 10; i++) {
        if (drops[i].age < 5.0) {
          drops[i].age += dt * 1.2;
        }
      }

      if (imageLoaded) {
        gl.uniform1i(uImage, 0);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform2f(uImageResolution, imgWidth, imgHeight);
        gl.uniform1f(uTime, timeSec);
        gl.uniform2f(uMouse, currentMouse.x, currentMouse.y);
        gl.uniform1f(uMouseIntensity, mouseIntensity);

        for (let i = 0; i < 10; i++) {
          if (uDropsLocs[i]) {
            gl.uniform3f(uDropsLocs[i], drops[i].x, drops[i].y, drops[i].age);
          }
        }

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parentEl) {
        parentEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [imageSrc]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
    />
  );
}
