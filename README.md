<div align="center">
  <img src="https://github.com/alexander-gekov/a12v-stack/raw/main/assets/images/logo.png" alt="A12V Logo" width="180" />
  
  <h1>create-a12v-app</h1>
  <p>The ultimate CLI tool for scaffolding modern Nuxt 3 applications with the A12V Stack. Get started with a full-featured application including Supabase, Prisma, TanStack Query, Shadcn UI, and more - all preconfigured and ready to build.</p>
</div>

---

## 🚀 Quick Start

```bash
npx create-a12v-app@latest my-awesome-app
```

That's it! Follow the interactive prompts to set up your new Nuxt 3 application with the A12V stack.

You can also use your preferred package manager:

```bash
# Using pnpm
pnpm create a12v-app my-awesome-app

# Using yarn
yarn create a12v-app my-awesome-app
```

## ✨ What's Included?

The A12V Stack comes with everything you need to build a modern, full-stack Nuxt 3 application:

- **Vue 3 + Nuxt 3** - The Progressive Vue Framework ✅
- **UI** - Tailwindcss + Shadcn UI for beautiful, accessible components ✅
- **State Management** - Pinia for intuitive state management ✅
- **Data Fetching** - TanStack Query for powerful async state management ✅
- **Validation** - Zod for runtime type checking ✅
- **AI** - Vercel AI SDK for building AI-powered features ✅
- **Auth** - Clerk / Better-Auth for secure authentication ✅
- **Database** - Supabase DB + Prisma ORM for type-safe database access ✅
- **Payments** - Stripe / Polar.sh for handling payments ✅
- **Emails** - Resend for beautiful emails ✅
- **Queues** - Trigger.dev for background jobs ✅
- **Cache** - Upstash Redis for high-performance caching ✅
- **Analytics** - Posthog for product analytics ✅

## 🛠️ Usage

```bash
# Create a new project
npx create-a12v-app@latest my-awesome-app

# Navigate to the project
cd my-awesome-app

# Start development server
pnpm dev
```

Follow the interactive prompts to configure your project with the features you need.

## 📦 Project Structure

After scaffolding, your project will have the following structure:

```
my-awesome-app/
├── components/     # Vue components
├── composables/    # Vue composables
├── layouts/       # Page layouts
├── pages/         # File-based routing
├── server/        # API routes & server middleware
├── stores/        # Pinia stores
├── types/         # TypeScript types
└── utils/         # Utility functions
```

## 🔐 Environment Setup

1. Copy `.env.example` to `.env`
2. Configure your environment variables:

```bash
# Authentication
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=

# Database
DATABASE_URL=
SUPABASE_URL=
SUPABASE_KEY=

# Email
RESEND_API_KEY=

# Payments
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
POLAR_TOKEN=

# Cache
UPSTASH_REDIS_URL=

# Analytics
POSTHOG_KEY=
```

## 📚 Documentation

- [A12V Stack Documentation](https://github.com/alexander-gekov/a12v-stack)
- [Supabase + Clerk Setup Guide](https://supabase.com/docs/guides/auth/third-party/clerk)
- [Polar.sh Usage-Based Pricing](https://docs.polar.sh/features/usage-based-billing/introduction)
- [Trigger.dev + Prisma Guide](https://trigger.dev/docs/guides/frameworks/prisma)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT

<div align="center">
  <sub>Made with ❤️ by A12V - AlexanderGekov</sub>
</div>
