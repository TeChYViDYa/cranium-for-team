"use client";

import { useRouter } from "next/navigation";

export default function Analyze() {
  const router = useRouter();

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Analyze Page</h1>

      <button
        onClick={() => router.push("/notify")}
        className="bg-black text-white px-4 py-2 rounded-xl"
      >
        Reach Out
      </button>
    </main>
  );
}
