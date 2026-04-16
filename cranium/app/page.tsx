"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Silent Signal</h1>

      <p>Dashboard coming soon...</p>

      <button
        onClick={() => router.push("/analyze")}
        className="bg-black text-white px-4 py-2 rounded-xl"
      >
        Check My Pattern
      </button>
    </main>
  );
}
