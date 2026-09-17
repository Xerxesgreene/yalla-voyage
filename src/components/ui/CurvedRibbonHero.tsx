'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { services, Service } from '@/data/services';

interface CurvedRibbonHeroProps {
  onSelectService?: (service: Service) => void;
  className?: string;
}

export function CurvedRibbonHero({ onSelectService, className = '' }: CurvedRibbonHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Interactive drag state
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    currentOffset: 0,
    velocity: 0,
    lastX: 0,
    lastTime: 0,
  });

  // Mouse tilt target
  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 560;

    // ── 1. Scene & Camera Setup ──
    const scene = new THREE.Scene();
    
    // Camera with wider perspective to capture dramatic curve depth
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0.5, 17.5);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // ── 2. Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(8, 12, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x39c27d, 0.45);
    dirLight2.position.set(-10, -5, 6);
    scene.add(dirLight2);

    const backlight = new THREE.DirectionalLight(0xffeedd, 0.8);
    backlight.position.set(0, 6, -12);
    scene.add(backlight);

    // ── 3. High-Definition Canvas Texture Generation ──
    // We create a wide virtual canvas with alternating luxury service photos, typography panels & stamps
    const texWidth = 4096;
    const texHeight = 512;
    const texCanvas = document.createElement('canvas');
    texCanvas.width = texWidth;
    texCanvas.height = texHeight;
    const ctx = texCanvas.getContext('2d')!;

    // Texture items definition
    const ribbonItems = [
      {
        num: '01',
        title: 'PRIVATE JET AVIATION',
        subtitle: 'Direct FBO & bespoke dining',
        type: 'photo',
        imageSrc: '/images/service-private-jet.jpg',
        badge: 'VIP Mobility',
        serviceIndex: 2,
      },
      {
        num: 'SEAL',
        title: 'يلا سفر',
        subtitle: 'HAUTE CURATION • EST. 2024',
        type: 'stamp',
        bgColor: '#0F2E23',
        textColor: '#39C27D',
        serviceIndex: 0,
      },
      {
        num: '02',
        title: 'BESPOKE ALULA SANCTUARY',
        subtitle: 'Handcrafted luxury desert villas',
        type: 'photo',
        imageSrc: '/images/alula-luxury-sanctuary.jpg',
        badge: 'Signature Sanctuary',
        serviceIndex: 0,
      },
      {
        num: '03',
        title: 'RED SEA YACHT CHARTERS',
        subtitle: 'Pristine islands & secluded reefs',
        type: 'photo',
        imageSrc: '/images/saudi-redsea.jpg',
        badge: 'Maritime VIP',
        serviceIndex: 10,
      },
      {
        num: 'SEAL',
        title: 'CONCIERGE DESK',
        subtitle: '24/7 DEDICATED ATELIER',
        type: 'stamp',
        bgColor: '#2E6B57',
        textColor: '#F4EFE6',
        serviceIndex: 6,
      },
      {
        num: '04',
        title: 'OVERWATER MALDIVES RETREAT',
        subtitle: 'Private island serenity & chefs',
        type: 'photo',
        imageSrc: '/images/dest-maldives.jpg',
        badge: 'Ultra-Luxury',
        serviceIndex: 1,
      },
      {
        num: '05',
        title: 'CORPORATE MICE & SUMMITS',
        subtitle: 'Global delegate & venue logistics',
        type: 'photo',
        imageSrc: '/images/service-corporate-mice.jpg',
        badge: 'Enterprise',
        serviceIndex: 4,
      },
      {
        num: 'SEAL',
        title: 'LE COMPTOIR VOYAGE',
        subtitle: 'BESPOKE TRAVEL • SINCE 2024',
        type: 'stamp',
        bgColor: '#1D3557',
        textColor: '#A8DADC',
        serviceIndex: 0,
      },
      {
        num: '06',
        title: 'SPIRITUAL UMRAH JOURNEYS',
        subtitle: '5-Star Haramain suites & heritage',
        type: 'photo',
        imageSrc: '/images/service-umrah-vip.jpg',
        badge: 'Spiritual VIP',
        serviceIndex: 8,
      },
      {
        num: '07',
        title: 'CHAUFFEURED MAYBACH FLEET',
        subtitle: 'Discreet diplomatic transport',
        type: 'photo',
        imageSrc: '/images/service-luxury-fleet.jpg',
        badge: 'Executive',
        serviceIndex: 3,
      },
      {
        num: 'SEAL',
        title: 'GLOBAL VISAS',
        subtitle: 'SWIFT VIP CLEARANCE',
        type: 'stamp',
        bgColor: '#0F2E23',
        textColor: '#E7E1D8',
        serviceIndex: 6,
      },
      {
        num: '08',
        title: 'WELLNESS & SPA SANCTUARY',
        subtitle: 'Holistic longevity & rejuvenation',
        type: 'photo',
        imageSrc: '/images/service-wellness-retreat.jpg',
        badge: 'Holistic Care',
        serviceIndex: 9,
      },
    ];

    // Preload all images and draw texture
    const loadedImages: { [src: string]: HTMLImageElement } = {};
    let imagesToLoad = ribbonItems.filter(it => it.type === 'photo').length;
    let imagesLoadedCount = 0;

    const renderCanvasTexture = () => {
      // Background strip: pure clean ivory/off-white with subtle border line
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, texWidth, texHeight);

      const panelWidth = texWidth / ribbonItems.length;

      ribbonItems.forEach((item, index) => {
        const x = index * panelWidth;
        const y = 0;
        const w = panelWidth;
        const h = texHeight;

        // Draw panel separator line
        ctx.strokeStyle = 'rgba(15, 46, 35, 0.15)';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, w, h);

        if (item.type === 'stamp') {
          // ── Circular Stamp Seal (like Bureau Dimanche brand seal in reference) ──
          ctx.fillStyle = '#FAF7F2';
          ctx.fillRect(x, y, w, h);

          const centerX = x + w / 2;
          const centerY = h / 2;
          const radius = Math.min(w, h) * 0.38;

          // Outer Circle
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.fillStyle = item.bgColor || '#0F2E23';
          ctx.fill();

          // Inner dashed border
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius - 8, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.stroke();

          // Seal Icon / Graphic
          ctx.beginPath();
          ctx.arc(centerX, centerY - 15, 24, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.fill();

          // Center Monogram / Compass Emblem
          ctx.fillStyle = item.textColor || '#39C27D';
          ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('YV', centerX, centerY - 15);

          // Center Text
          ctx.fillStyle = '#FFFFFF';
          ctx.font = '800 16px "Plus Jakarta Sans", sans-serif';
          ctx.fillText(item.title, centerX, centerY + 30);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
          ctx.font = '600 10px monospace';
          ctx.fillText(item.subtitle, centerX, centerY + 50);

          ctx.restore();
        } else {
          // ── Photo Panel with Typography & Badges ──
          const img = loadedImages[item.imageSrc || ''];
          if (img) {
            // Draw image covering the panel
            const padding = 12;
            const imgX = x + padding;
            const imgY = padding;
            const imgW = w - padding * 2;
            const imgH = h - padding * 2;

            ctx.save();
            // Rounded corners for photo frame
            const cornerRadius = 16;
            ctx.beginPath();
            ctx.moveTo(imgX + cornerRadius, imgY);
            ctx.lineTo(imgX + imgW - cornerRadius, imgY);
            ctx.quadraticCurveTo(imgX + imgW, imgY, imgX + imgW, imgY + cornerRadius);
            ctx.lineTo(imgX + imgW, imgY + imgH - cornerRadius);
            ctx.quadraticCurveTo(imgX + imgW, imgY + imgH, imgX + imgW - cornerRadius, imgY + imgH);
            ctx.lineTo(imgX + cornerRadius, imgY + imgH);
            ctx.quadraticCurveTo(imgX, imgY + imgH, imgX, imgY + imgH - cornerRadius);
            ctx.lineTo(imgX, imgY + cornerRadius);
            ctx.quadraticCurveTo(imgX, imgY, imgX + cornerRadius, imgY);
            ctx.closePath();
            ctx.clip();

            // Cover draw image
            ctx.drawImage(img, imgX, imgY, imgW, imgH);

            // Dark vignette overlay at bottom and top
            const grad = ctx.createLinearGradient(imgX, imgY, imgX, imgY + imgH);
            grad.addColorStop(0, 'rgba(15, 46, 35, 0.45)');
            grad.addColorStop(0.4, 'rgba(15, 46, 35, 0.05)');
            grad.addColorStop(0.7, 'rgba(15, 46, 35, 0.45)');
            grad.addColorStop(1, 'rgba(15, 46, 35, 0.92)');
            ctx.fillStyle = grad;
            ctx.fillRect(imgX, imgY, imgW, imgH);

            // Top Badge Pill
            ctx.fillStyle = '#2E6B57';
            ctx.beginPath();
            ctx.roundRect(imgX + 16, imgY + 16, 120, 26, [13]);
            ctx.fill();

            ctx.fillStyle = '#F4EFE6';
            ctx.font = 'bold 11px monospace';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText((item.badge || 'SERVICES').toUpperCase(), imgX + 28, imgY + 29);

            // Top Number
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '900 18px monospace';
            ctx.textAlign = 'right';
            ctx.fillText(item.num, imgX + imgW - 20, imgY + 30);

            // Bottom Title & Subtitle
            ctx.fillStyle = '#39C27D';
            ctx.font = 'bold 12px monospace';
            ctx.textAlign = 'left';
            ctx.fillText('يلا سفر', imgX + 18, imgY + imgH - 52);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = '800 20px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(item.title, imgX + 18, imgY + imgH - 30);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.font = '400 12px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(item.subtitle, imgX + 18, imgY + imgH - 12);

            ctx.restore();
          }
        }
      });

      if (ribbonTexture) {
        ribbonTexture.needsUpdate = true;
      }
    };

    // Load each image
    ribbonItems.forEach(item => {
      if (item.type === 'photo' && item.imageSrc) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = item.imageSrc;
        img.onload = () => {
          loadedImages[item.imageSrc!] = img;
          imagesLoadedCount++;
          if (imagesLoadedCount >= imagesToLoad) {
            renderCanvasTexture();
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          imagesLoadedCount++;
          if (imagesLoadedCount >= imagesToLoad) {
            renderCanvasTexture();
            setIsLoaded(true);
          }
        };
      }
    });

    renderCanvasTexture();

    // ── 4. Three.js Canvas Texture Setup ──
    const ribbonTexture = new THREE.CanvasTexture(texCanvas);
    ribbonTexture.wrapS = THREE.RepeatWrapping;
    ribbonTexture.wrapT = THREE.ClampToEdgeWrapping;
    ribbonTexture.repeat.set(2.4, 1); // Repeat ribbon content smoothly
    ribbonTexture.minFilter = THREE.LinearMipmapLinearFilter;
    ribbonTexture.magFilter = THREE.LinearFilter;
    ribbonTexture.generateMipmaps = true;
    ribbonTexture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 16);

    // Backside texture (Luxury Forest Green Velvet pattern with subtle monogram lines)
    const backCanvas = document.createElement('canvas');
    backCanvas.width = 512;
    backCanvas.height = 512;
    const bctx = backCanvas.getContext('2d')!;
    bctx.fillStyle = '#0B221A';
    bctx.fillRect(0, 0, 512, 512);
    // Subtle luxury diagonal stripe
    bctx.strokeStyle = 'rgba(46, 107, 87, 0.35)';
    bctx.lineWidth = 3;
    for (let d = -512; d < 1024; d += 36) {
      bctx.beginPath();
      bctx.moveTo(d, 0);
      bctx.lineTo(d + 512, 512);
      bctx.stroke();
    }
    // Border rim
    bctx.strokeStyle = '#39C27D';
    bctx.lineWidth = 14;
    bctx.strokeRect(0, 0, 512, 512);
    bctx.fillStyle = '#39C27D';
    bctx.font = 'bold 24px monospace';
    bctx.textAlign = 'center';
    bctx.fillText('يلا سفر • PRIVATE ATELIER', 256, 264);

    const backTexture = new THREE.CanvasTexture(backCanvas);
    backTexture.wrapS = THREE.RepeatWrapping;
    backTexture.wrapT = THREE.RepeatWrapping;
    backTexture.repeat.set(12, 1);

    // ── 5. Exact 3D Spline Curve Formulation (Mirroring Reference Image) ──
    // The curve forms an elegant S-curl with a full loop on the left, climbing across center, and looping right
    const curvePoints = [
      new THREE.Vector3(-14.5, -4.2, -4.5), // Starting deep bottom-left
      new THREE.Vector3(-11.5, -1.8, 1.2),  // Climbing into left curl
      new THREE.Vector3(-8.8, -3.6, 4.2),   // Bottom bulge of left loop
      new THREE.Vector3(-6.2, -1.6, 3.4),   // Exiting left loop towards viewer
      new THREE.Vector3(-2.2, 0.4, 1.2),    // Center-left ascending
      new THREE.Vector3(2.0, 1.8, -0.6),    // Center-right ascending
      new THREE.Vector3(6.5, 2.7, -2.2),    // Climbing to upper right
      new THREE.Vector3(10.2, 2.9, -0.8),   // Top loop of right side
      new THREE.Vector3(12.8, 0.2, 2.6),    // Right loop rolling downward
      new THREE.Vector3(14.8, -2.4, -1.2),  // Trailing off bottom right
    ];

    const splineCurve = new THREE.CatmullRomCurve3(curvePoints, false, 'centripetal', 0.5);

    // ── 6. Parametric Ribbon Geometry with Controlled Twist (Torsion) ──
    const ribbonSegments = 320;
    const ribbonWidth = 3.6;
    const geometry = new THREE.BufferGeometry();

    const positions: number[] = [];
    const normals: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];

    // Twist profile function: gives the ribbon its exact rotation around its spine
    const getTwistAngle = (t: number): number => {
      // Left curl loop twist -> Center flat tilt -> Right curl twist
      if (t < 0.28) {
        // Roll curl on left
        return Math.PI * 0.75 * Math.sin((t / 0.28) * Math.PI) - 0.2;
      } else if (t > 0.72) {
        // Roll curl on right
        return -Math.PI * 0.65 * Math.sin(((t - 0.72) / 0.28) * Math.PI) + 0.15;
      } else {
        // Smooth center slight tilt facing camera
        const midT = (t - 0.28) / (0.72 - 0.28);
        return 0.18 * Math.sin(midT * Math.PI);
      }
    };

    // Build the vertices along the curve
    for (let i = 0; i <= ribbonSegments; i++) {
      const t = i / ribbonSegments;
      const point = splineCurve.getPoint(t);
      const tangent = splineCurve.getTangent(t).normalize();

      // Base up vector
      const baseUp = new THREE.Vector3(0, 1, 0);
      let binormal = new THREE.Vector3().crossVectors(tangent, baseUp).normalize();
      if (binormal.lengthSq() < 0.001) {
        binormal = new THREE.Vector3(1, 0, 0);
      }
      const normal = new THREE.Vector3().crossVectors(binormal, tangent).normalize();

      // Apply twist angle around tangent
      const twist = getTwistAngle(t);
      const cosT = Math.cos(twist);
      const sinT = Math.sin(twist);

      // Rotated width vector
      const rotatedWidthVec = new THREE.Vector3()
        .addScaledVector(binormal, cosT)
        .addScaledVector(normal, sinT)
        .normalize()
        .multiplyScalar(ribbonWidth * 0.5);

      const surfaceNormal = new THREE.Vector3()
        .addScaledVector(normal, cosT)
        .addScaledVector(binormal, -sinT)
        .normalize();

      // Top vertex (left edge)
      const topVertex = new THREE.Vector3().subVectors(point, rotatedWidthVec);
      // Bottom vertex (right edge)
      const bottomVertex = new THREE.Vector3().addVectors(point, rotatedWidthVec);

      positions.push(topVertex.x, topVertex.y, topVertex.z);
      positions.push(bottomVertex.x, bottomVertex.y, bottomVertex.z);

      normals.push(surfaceNormal.x, surfaceNormal.y, surfaceNormal.z);
      normals.push(surfaceNormal.x, surfaceNormal.y, surfaceNormal.z);

      uvs.push(t, 0);
      uvs.push(t, 1);
    }

    // Build triangle indices (front face & back face)
    for (let i = 0; i < ribbonSegments; i++) {
      const a = i * 2;
      const b = i * 2 + 1;
      const c = (i + 1) * 2;
      const d = (i + 1) * 2 + 1;

      // Front faces
      indices.push(a, b, c);
      indices.push(b, d, c);

      // Back faces (for double-sided visibility with correct culling)
      indices.push(a, c, b);
      indices.push(b, c, d);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    // ── 7. Ribbon Material & Mesh ──
    const ribbonMaterial = new THREE.MeshStandardMaterial({
      map: ribbonTexture,
      side: THREE.DoubleSide,
      roughness: 0.28,
      metalness: 0.12,
      bumpScale: 0.05,
    });

    const ribbonMesh = new THREE.Mesh(geometry, ribbonMaterial);
    scene.add(ribbonMesh);

    // ── 8. Soft Floating Shadows Under Ribbon ──
    const shadowGeo = new THREE.PlaneGeometry(32, 10);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x0F2E23,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -5.2, 0);
    scene.add(shadowPlane);

    // ── 9. Interactive Drag & Scrub Handlers ──
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      dragRef.current.isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      dragRef.current.startX = clientX;
      dragRef.current.lastX = clientX;
      dragRef.current.lastTime = performance.now();
      dragRef.current.velocity = 0;
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      // Mouse Parallax coordinates (-1 to 1)
      const rect = container.getBoundingClientRect();
      const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = normX * 0.8;
      mouseRef.current.targetY = normY * 0.5;

      if (dragRef.current.isDragging) {
        const deltaX = clientX - dragRef.current.lastX;
        const now = performance.now();
        const dt = Math.max(now - dragRef.current.lastTime, 1);

        dragRef.current.currentOffset += deltaX * 0.0008;
        dragRef.current.velocity = (deltaX / dt) * 0.02;

        dragRef.current.lastX = clientX;
        dragRef.current.lastTime = now;
      }
    };

    const handleMouseUp = () => {
      dragRef.current.isDragging = false;
    };

    const canvasElem = renderer.domElement;
    canvasElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvasElem.addEventListener('touchstart', handleMouseDown, { passive: true });
    window.addEventListener('touchmove', handleMouseMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    // ── 10. Click Raycaster to Trigger Service Info ──
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleClick = (e: MouseEvent) => {
      // If was dragging significantly, ignore click
      if (Math.abs(dragRef.current.velocity) > 0.005) return;

      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObject(ribbonMesh);

      if (intersects.length > 0 && intersects[0].uv) {
        const u = (intersects[0].uv.x * 2.4 + ribbonTexture.offset.x) % 1;
        const normalizedU = (u + 1) % 1;
        const itemIdx = Math.floor(normalizedU * ribbonItems.length);
        const clickedItem = ribbonItems[itemIdx];

        if (clickedItem && clickedItem.serviceIndex !== undefined) {
          const matchedService = services[clickedItem.serviceIndex] || services[0];
          if (onSelectService) {
            onSelectService(matchedService);
          }
        }
      }
    };

    canvasElem.addEventListener('click', handleClick);

    // ── 11. Responsive Resize Handler ──
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight || 560;

      camera.aspect = width / height;
      // Adjust camera distance for mobile
      if (width < 768) {
        camera.position.z = 22.0;
        camera.fov = 48;
      } else if (width < 1200) {
        camera.position.z = 19.0;
        camera.fov = 44;
      } else {
        camera.position.z = 17.5;
        camera.fov = 42;
      }
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // ── 12. Animation Loop ──
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Continuous glide speed + user drag momentum
      const autoSpeed = 0.045;
      
      // Decay drag velocity smoothly with inertia
      if (!dragRef.current.isDragging) {
        dragRef.current.velocity *= 0.94;
      }

      // Update texture scrolling offset
      ribbonTexture.offset.x += (autoSpeed * delta) - dragRef.current.velocity;

      // Mouse Parallax easing (smooth spring interpolation)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Subtle dynamic mesh wave and tilt
      ribbonMesh.rotation.y = mouseRef.current.x * 0.12;
      ribbonMesh.rotation.x = -mouseRef.current.y * 0.08;
      ribbonMesh.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.12 + mouseRef.current.y * 0.2;

      // Subtle camera parallax
      camera.position.x = mouseRef.current.x * 0.8;
      camera.position.y = 0.5 + mouseRef.current.y * 0.6;
      camera.lookAt(0, 0.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      canvasElem.removeEventListener('mousedown', handleMouseDown);
      canvasElem.removeEventListener('touchstart', handleMouseDown);
      canvasElem.removeEventListener('click', handleClick);

      geometry.dispose();
      ribbonMaterial.dispose();
      ribbonTexture.dispose();
      backTexture.dispose();
      renderer.dispose();
    };
  }, [onSelectService]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[460px] sm:h-[540px] lg:h-[640px] overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      title="Drag to spin the 3D Ribbon • Click any card to view service"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block absolute inset-0 pointer-events-auto"
      />

      {/* Floating Micro-hint pill */}
      <div className="absolute bottom-4 right-6 z-20 pointer-events-none hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#0F2E23]/10 text-[11px] font-mono text-[#0F2E23]/75 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#39C27D] animate-ping" />
        <span>Interactive 3D Strip • Drag to glide</span>
      </div>
    </div>
  );
}
