Make sure your .env.local has a public base URL for auth redirects:

NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000

(We previously used APP_BASE_URL; adding this public variant ensures the sign-in redirects work.)
