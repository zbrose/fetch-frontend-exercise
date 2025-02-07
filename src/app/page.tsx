"use client";
import { useState } from "react";
import { login } from "./auth/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");
  const router = useRouter();

  const handleLogin = async () => {
    const result = await login(name, email);
    if (result.success) {
      router.push("/search");
    } else {
      setError(result.error);
    }
  };

  return (
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
      {error && <strong>{error}</strong>}
    </main>
  );
}
