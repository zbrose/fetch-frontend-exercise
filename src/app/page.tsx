"use client";
import { useState } from "react";
import { login } from "./actions/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");
  const router = useRouter();

  const handleLogin = async () => {
    const result = await login(name, email);
    if (result.success) {
      router.push("/dogs");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start border-black">
        <h3>Login:</h3>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p>{error} </p>}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1>Footer Content...</h1>
      </footer>
    </div>
  );
}
