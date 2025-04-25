'use client';

import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">Building with Next.js 15</p>
      <p className="mt-2">Current Theme: {theme}</p>
    </main>
  );
}