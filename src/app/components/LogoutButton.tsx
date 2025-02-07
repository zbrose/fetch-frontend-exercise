"use client";

import { logout } from "../auth/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    // router.push("/");
  };
  return <button onClick={handleLogout}>Log Out</button>;
}
