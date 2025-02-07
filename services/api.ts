import axios from "axios";
import { cookies } from "next/headers";

axios.defaults.withCredentials = true;

// get list of dogs
export async function getDogList() {
  const token = (await cookies()).get("fetch-access-token");

  if (!token) throw new Error("Unauthorized");

  const res = await axios.get(`${process.env.API_URL}/dogs/breeds`);

  return res.data;
}

// get dogs by serach results

//logout
