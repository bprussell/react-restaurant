import { useEffect, useState } from "react";
import { Food } from "./food";
import Heading from "./shared/Heading";
export default function Menu() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      const resp = await fetch("http://localhost:3001/foods");
      const data = await resp.json();
      setFoods(data);
    }
    fetchFoods();
  }, []);

  return (
    <>
      <Heading level={2}>Menu</Heading>
      <div className="flex flex-wrap">
        {foods.map((food) => {
          return (
            <div
              key={food.name}
              className="max-w-sm cursor-pointer border-solid border-2 border-indigo-600 rounded-lg p-2 m-2 shadow-md hover:bg-indigo-600 hover:text-white"
            >
              <Heading level={4}>{food.name}</Heading>
              <img
                className="h-52"
                src={`/images/${food.image}`}
                alt={food.name}
              />
              <p>{food.description}</p>
              <p>${food.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
