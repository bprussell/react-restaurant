import { useState } from "react";
import App from "../App";
import { Food } from "../food";
import { useWorker } from "./useWorker";

export type FoodResponse = "Ice cream shop" | "Diner";

export default function DevTools() {
  const [foodResponse, setFoodResponse] = useState<FoodResponse>("Diner");

  const isReady = useWorker({
    foodResponse,
  });

  if (!isReady) return <p>Initializing...</p>;

  return (
    <>
      <App key={foodResponse} />
      <div className="absolute top-0 right-0 m-4">
        <label className="mr-3">Foods Response</label>
        <select
          value={foodResponse}
          onChange={(event) =>
            setFoodResponse(event.target.value as FoodResponse)
          }
        >
          <option value={"Ice cream shop"}>Ice cream shop</option>
          <option value={"Diner"}>Diner</option>
        </select>
      </div>
    </>
  );
}
