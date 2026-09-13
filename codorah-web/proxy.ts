import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './lib/i18n/config';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, images, and public resources
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/projects') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect preferred locale from cookies or accept-language
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  let targetLocale: string = i18n.defaultLocale;

  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    targetLocale = cookieLocale;
  } else {
    const acceptLang = request.headers.get('accept-language') || '';
    if (acceptLang.startsWith('en') || acceptLang.includes(',en')) {
      targetLocale = 'en';
    }
  }

  const redirectUrl = new URL(
    `/${targetLocale}${pathname === '/' ? '' : pathname}`,
    request.url
  );
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|projects|favicon.ico).*)'],
};
