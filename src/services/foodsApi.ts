import { Food } from "../food";

export async function getFoods(): Promise<Food[]> {
  const resp = await fetch("http://localhost:3001/foods");
  const data = await resp.json();
  return data;
}
