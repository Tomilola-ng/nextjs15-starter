import React from "react";

import Illustration from "./illustration";

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pSm py-12 maxContainer">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary-400 font-heading flexCenter gap-x-2">
          Welcome to NextJs15 Starter!
          <Illustration />
        </h1>
        <p className="text-gray-700 mt-2">
          Kickstart your Next.js 15 project with the best tools, libraries, and
          practices.
        </p>
      </header>

      <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 font-heading">
            🚀 Features at a Glance
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
            <li>Built with Next.js 15 and React 19</li>
            <li>Utility-first styling with Tailwind CSS 3.4</li>
            <li>Integrated state management with Zustand</li>
            <li>Pre-configured with API routes and user management</li>
            <li>Animations using Framer Motion</li>
            <li>Global styling with Tailwind and custom themes</li>
            <li>Dark mode with Tailwind CSS</li>
            <li>Sitemap generation with next-sitemap</li>
            <li>API routes with Next.js API Routes</li>
            <li>Error handling with Next.js Error Boundary</li>
            <li>Editable logo component</li>
            <li>General use component screens</li>
            <li>Custom hooks with React Hooks</li>
            <li>TypeScript type definitions with TypeScript</li>
            <li>Utility functions and helpers</li>
            <li>Pre-configured with global providers</li>
            <li>Font management with Next.js Google Fonts</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 font-heading">
            📄 Get Started
          </h2>
          <p className="mt-2 text-gray-600">
            Follow the steps below to customize and launch your application:
          </p>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-600">
            <li>
              Install dependencies:{" "}
              <code className="bg-gray-100 p-1 rounded">npm install</code>
            </li>
            <li>
              Start the development server:{" "}
              <code className="bg-gray-100 p-1 rounded">npm run dev</code>
            </li>
            <li>
              Edit your app at{" "}
              <code className="bg-gray-100 p-1 rounded">
                /app/(home)/page.tsx
              </code>
            </li>
          </ol>
        </section>

        <section className="flex flex-col md:flex-row gap-4 mt-6">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-primary-400 text-white text-center px-6 py-3 rounded-md shadow hover:bg-primary-300"
          >
            Read Next.js Documentation
          </a>
          <a
            href="https://github.com/Tomilola-ng/nextJs15-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-gray-100 text-gray-800 text-center px-6 py-3 rounded-md shadow hover:bg-gray-200"
          >
            View GitHub Repository
          </a>
        </section>
      </main>

      <footer className="mt-8 text-gray-500 text-sm">
        Built with 💖 by{" "}
        <a
          href="https://github.com/Tomilola-ng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:underline"
        >
          Tomilola-ng
        </a>
      </footer>
    </div>
  );
}
