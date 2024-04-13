# Clerk issue

## Repro

1. Add the following env vars to `.env.local`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

2. Run `bun dev` and visit `http://localhost:3002`

3. Open the console and Sign in using Google

In the console, you'll see:

> GET http://localhost:3002/ 401 (Unauthorized)

The homepage is rendered properly. However, I'm wondering why the Unauthorized error occurs.
