// middleware.ts — passthrough (admin removed)
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next({ request });
}

export const config = {
  matcher: [],
};
