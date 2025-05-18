<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
# ALX Listing App

A modern Airbnb clone listing page built with Next.js, TypeScript, and TailwindCSS.

## Project Overview

ALX Listing App is a project aimed at creating a responsive and user-friendly property listing page inspired by Airbnb. This project demonstrates best practices in modern web development using a robust tech stack and follows a well-organized project structure for scalability and maintainability.

## Tech Stack

- **Next.js**: React framework for production-grade applications
- **TypeScript**: For type safety and enhanced developer experience
- **TailwindCSS**: Utility-first CSS framework for styling
- **ESLint**: For code linting and maintaining code quality

## Project Structure

The project follows a clean and scalable folder structure:

- **components/**: Contains reusable UI components
  - **common/**: Common UI components used across the application
    - `Button.tsx`: Reusable button component with various styles
    - `Card.tsx`: Reusable card component for displaying property listings
- **interfaces/**: TypeScript interfaces for type definitions
  - `index.ts`: Contains interfaces like CardProps, ButtonProps, etc.
- **constants/**: Application constants and configuration
  - `index.ts`: API URLs, UI constants, and sample data
- **pages/**: Next.js pages
  - `index.tsx`: Home page showing the property listings
- **public/assets/**: Static assets like images
  - Contains property listing images and other static assets
- **styles/**: Global styles
  - `globals.css`: Contains Tailwind imports and global styles

## Getting Started

### Prerequisites

- Node.js (version 16+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Muturi1999/alx-listing-app.git
   cd alx-listing-app