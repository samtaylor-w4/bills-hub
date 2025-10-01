# Bills Hub (Minimal MVP)

This is a very simple starting point for tracking bills. It is intentionally minimal so you can learn step by step.

## What You Can Do Now
- View list of bills
- Create a bill
- Edit a bill
- Delete a bill

## Tech Used
- Next.js + React + TypeScript
- SQLite (file database) + Prisma
- Tailwind CSS
- Zod (for form validation)

## Prerequisites
- Node.js (LTS recommended). Check with:
```bash
node -v
```

If you need Node installation help, see: https://nodejs.org/en

## 1. Install Dependencies
```bash
npm install
```

## 2. Set Up Environment File
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

## 3. Run Initial Migration
This creates the database file and the Bills table.
```bash
npm run prisma:migrate
```
When prompted for a migration name you can type: `init`

## 4. (Optional) Seed Sample Data
```bash
npm run db:seed
```

## 5. Start the Dev Server
```bash
npm run dev
```
Then open: http://localhost:3000

You should be redirected to `/bills`.

## Project Structure (Simplified)
```
prisma/         # Database schema + seeds
src/app/        # Next.js route pages & API routes
src/components/ # Reusable UI components
src/lib/        # Database client & validation
```

## Next Ideas (Not Included Yet)
- Paid status
- Recurring bills
- Sorting/filtering
- Authentication
- Forecast totals
- Notifications

## Common Troubles
1. Error: "Prisma client not found"
   Run: `npm install` and `npm run prisma:migrate`
2. Changing the model
   Edit `prisma/schema.prisma`, then:
   ```bash
   npm run prisma:migrate
   ```
3. Seeing the DB contents visually
   ```
   npx prisma studio
   ```

## Learning Tips
- Change a heading in `src/app/bills/page.tsx` and refresh the browser to see your change.
- Add a console.log in an API route file (e.g. `/api/bills/route.ts`) and watch the terminal output when you create a bill.

---

You’re off to a good start. Build small and iterate. : )