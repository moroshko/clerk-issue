# Clerk issue

## Repro

1. Add the following env vars to `.env.local`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
```

2. Run `npm i`

3. Run `npm run dev` and visit `http://localhost:3002`

4. Open the console and Sign in using email

In the email inbox, two separate emails with two different verification codes appear.
