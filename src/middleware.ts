import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// Detect session and redirect to /auth if not found
export function middleware(request: NextRequest) {
    const session = cookies().get('session');

    const current_url = request.nextUrl.clone();
    const current_path = current_url.pathname;

    const isAuthPath = current_path === '/auth';

    if (!session && !isAuthPath) {
        current_url.pathname = '/auth';
        return NextResponse.redirect(current_url);
    }

    if (session && isAuthPath) {
        current_url.pathname = '/';
        return NextResponse.redirect(current_url);
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
