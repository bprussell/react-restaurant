import { Food, NewFood } from "../food";

const url = "http://localhost:3001/foods";

export async function getFoods(): Promise<Food[]> {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

export async function addFood(food: NewFood): Promise<Food> {
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  return resp.json();
}

export async function deleteFood(id: number): Promise<void> {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

export async function deleteFoodsByName(name: string): Promise<void> {
  const foods = await getFoods();
  const foodsToDelete = foods.filter((f) => f.name === name);
  await Promise.all(foodsToDelete.map((f) => deleteFood(f.id)));
}
