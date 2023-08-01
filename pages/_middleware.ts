import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(req: NextRequest, ev: NextFetchEvent): NextResponse {
  const ContentSecurityPolicy = `
	  frame-src https://player.vimeo.com;
  `

  const response = NextResponse.next()

  response.headers.set('Content-Security-Policy', ContentSecurityPolicy.replace(/\n/g, ''))
  response.headers.set('X-Deploy', 'true')
  return response
}
