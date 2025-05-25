# GP Consulting

A modern consulting company website built with Next.js, Tailwind CSS, and Supabase.

## Technologies

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion, GSAP
- **Backend**: Supabase
- **Deployment**: Vercel

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example` with your Supabase credentials
4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Building for Production

```bash
npm run build
```

## Deployment to Vercel

This project is configured for deployment on Vercel. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel: https://vercel.com/new
3. Connect to your Git repository
4. Configure the following environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL`
5. Deploy!

## Supabase Integration

This project uses Supabase for backend functionality. To set up Supabase:

1. Create a new project on [Supabase](https://supabase.com)
2. Get your project URL and anon key from the API settings
3. Add these to your environment variables

## Features

- Modern UI with animations and microinteractions
- Responsive design for all device sizes
- Integration with Supabase for backend services
- Optimized for performance and SEO

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
