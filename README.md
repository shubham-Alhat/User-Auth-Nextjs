# Next JS

### WE will build auth-system

## Theory of Next js.

**Just talk about project structure, that src is main folder where app folder is there. in app, there is frontend and backend. go to docs and read.**

### How I set up project.

1. Make sure **folder name** you open in vs code should be in **lowercase**.
2. Run the following command with at last `.` . **It means create project in current directory.**

```bash
npx create-next-app@latest .
```

- √ Would you like to use TypeScript? ... No / `Yes`
- √ Would you like to use ESLint? ... No / `Yes`
- √ Would you like to use Tailwind CSS? ... No / `Yes`
- √ Would you like your code inside a `src/` directory? ... No / `Yes`
- √ Would you like to use App Router? (recommended) ... No / `Yes`
- √ Would you like to use Turbopack for `next dev`? ... No / `Yes`
- √ Would you like to customize the import alias (`@/*` by default)? ... No / `Yes` -- **mostly no but lets see.**
- √ What import alias would you like configured? ... `@/*`

---

### Creating folder structure.

In **src/app**, create new folder, `login`. inside it, create a file **page.tsx**. returns the UI. Start the server and see **http://localhost:3000/login** . you will see that UI. again same create **signup folder**. inside it **again**, `page.tsx` file where returns signupUI. go to /signup and you get UI.

**Note: Every folder in app creates new routes and inside it, the file should always have `page.tsx` named.**

**just see these below notes.**

---

#### 📁 `src/` Folder Structure (Next.js 15 – App Router based)

```bash
src/
│
├── app/                           # App Router – frontend routes & backend API
│   │
│   ├── api/                       # API route handler (like backend)
│   │   └── users/                 # User-related backend logic (grouped)
│   │       ├── login/
│   │       │   └── routes.ts      # POST /api/users/login – login API logic
│   │       └── signup/
│   │           └── routes.ts      # POST /api/users/signup – signup API logic
│   │
│   ├── login/
│   │   └── page.tsx               # Renders UI for /login route
│   │
│   ├── signup/
│   │   └── page.tsx               # Renders UI for /signup route
│   │
│   ├── layout.tsx                 # Root layout (applied to all routes)
│   ├── page.tsx                   # Home page route → `/`
│   ├── globals.css                # Global styles (used across app)
│   └── favicon.ico                # App icon
│
├── helpers/                       # Utility functions (e.g., db connection, hashing)
│   └── ...                        # Example: connectDB.ts, hashPassword.ts
│
├── models/                        # Mongoose or Prisma schemas for DB
│   └── ...                        # Example: User.ts
│
.env                               # Environment variables (DB_URI, JWT_SECRET, etc.)
```

---

#### 📌 Key Concepts:

| Path                 | Purpose                                                   |
| -------------------- | --------------------------------------------------------- |
| `app/api/...`        | Where backend logic lives using **`route handlers`**      |
| `routes.ts`          | Export HTTP methods (`POST`, `GET`, etc.) like in Express |
| `app/login/page.tsx` | UI for `/login` – rendered on client or server            |
| `layout.tsx`         | Shared layout (like Nav, Theme, Auth wrapper)             |
| `helpers/`           | Keeps logic like connecting DB or utility functions       |
| `models/`            | Defines how your data looks in DB (MongoDB, etc.)         |

---

### MongoDB connection

1. Create a folder named `config` in **src** folder and in it, dbConnection.js. function to connect to database. **Dont use `process.exit(1)` in Next JS apps**

---

### Starting with frontend stuff.

1. `page.tsx` file from **src > app > signup**

Learn about **ctr + D** to select all same words and change it at once
