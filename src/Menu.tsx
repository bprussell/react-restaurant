import { useQuery } from "@tanstack/react-query";
import { getFoods } from "./services/foodsApi";
import Heading from "./shared/Heading";
export default function Menu() {
  const foodQuery = useQuery(["foods"], getFoods);

  if (foodQuery.isLoading) return <p>Loading...</p>;
  if (foodQuery.isError) throw foodQuery.error;

  return (
    <>
      <Heading level={2}>Menu</Heading>
      <div className="flex flex-wrap">
        {foodQuery.data.map((food) => {
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
        {foodQuery.isFetching ? <p>Updating...</p> : null}
      </div>
    </>
  );
}
