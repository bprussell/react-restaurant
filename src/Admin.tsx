import React, { useState } from "react";
import { Food, foodTags } from "./food";
import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import CheckboxList from "./shared/CheckboxList";
import Heading from "./shared/Heading";
import Input from "./shared/Input";

const emptyFood: Food = {
  name: "",
  image: "",
  price: 0,
  description: "",
  tags: [],
};

export default function Admin() {
  const [food, setFood] = useState(emptyFood);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFood((prevFood) => ({ ...prevFood, [id]: value }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Name"
          className="my-4"
          onChange={handleInputChange}
          value={food.name}
        />
        <Input
          id="description"
          label="Description"
          className="my-4"
          onChange={handleInputChange}
          value={food.description}
        />
        <Input
          id="price"
          label="Price"
          className="my-4"
          type="number"
          onChange={handleInputChange}
          value={food.price}
        />
        <Input
          id="image"
          label="Image filename"
          className="my-4"
          onChange={handleInputChange}
        />
        <CheckboxList legend="Tags">
          {foodTags.map((tag) => (
            <Checkbox
              key={tag}
              id={tag}
              label={tag}
              checked={food.tags.includes(tag)}
              onChange={(event) => {
                setFood((currentFood) => {
                  const { checked } = event.target;
                  const tags = checked
                    ? [...currentFood.tags, tag]
                    : currentFood.tags.filter((t) => t !== tag);
                  return { ...currentFood, tags };
                });
              }}
            />
          ))}
        </CheckboxList>
        <Button className="block mt-4" type="submit" variant="primary">
          Save
        </Button>
      </form>
    </>
  );
}
