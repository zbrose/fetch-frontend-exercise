"use server";

import axios from "axios";

axios.defaults.withCredentials = true; // ensures cookies will be set with all requests

const API_URL = "https://frontend-take-home-service.fetch.com";

export async function login(name: string, email: string) {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { name, email });
    console.log(`${res} user: ${name} is logged in successfully.`);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to login" };
  }
}
