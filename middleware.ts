export { default } from 'next-auth/middleware'

export const config = { matcher: ['/profile/:path*', '/hh', '/resume','/protected/:path*', '/update-github/:path*'] }
