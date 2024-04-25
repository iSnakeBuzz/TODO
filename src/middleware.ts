import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// Detect session and redirect to /auth if not found
export function middleware(request: NextRequest) {
    const session = cookies().get('session');

    if (!session) {
        return NextResponse.redirect('/auth');
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
