"use client";

import axios from "axios";

export async function login(name: string, email: string) {
  try {
    const res = await axios.post(
      `${process.env.URL}/auth/login`,
      {
        name,
        email,
      },
      { withCredentials: true }
    );
    console.log(
      `Status ${res.status}: Success! ${name} is logged in successfully.`
    );
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to login" };
  }
}

export async function logout() {
  try {
    await axios.post(
      `${process.env.URL}/auth/logout`,
      {},
      { withCredentials: true }
    );
    console.log("Success! Logged out successfully");
    window.location.href = "/";
  } catch (error: any) {
    console.log("Logout error:", error.message);
  }
}
