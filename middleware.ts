export { default } from 'next-auth/middleware'

export const config = { matcher: ['/profile', '/hh','/protected/:path*'] }