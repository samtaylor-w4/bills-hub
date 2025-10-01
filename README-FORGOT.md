# Forgot / Reset Password (Supabase) — Drop-in

Pages included:
- `/auth/forgot` — user enters email, we call `resetPasswordForEmail(...)`
- `/auth/reset` — user lands here from email link, we exchange the code and call `updateUser({ password })`

How it works:
1) User requests reset on /auth/forgot.
2) Supabase emails a link. The link opens your app at /auth/reset with a `code` param.
3) /auth/reset exchanges the `code` for a session, then updates the password.

Setup checklist:
- Auth → Providers → Email: **Enabled**
- For dev without SMTP, you can still test if Confirm Email is OFF, but reset emails require SMTP or an email sandbox like Mailtrap.
- Add this to `.env.local`:
    NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000
- In production, configure SMTP so emails are delivered.

Optional:
- Add a "Forgot your password?" link to your sign-in page (see SNIPPET-add-forgot-link.txt).
