import React, { useState } from "react";
import toast from "react-hot-toast";
import { foodTags, NewFood } from "./food";
import { addFood } from "./services/foodsApi";
import Button from "./shared/Button";
import Checkbox from "./shared/Checkbox";
import CheckboxList from "./shared/CheckboxList";
import Heading from "./shared/Heading";
import Input from "./shared/Input";

const emptyFood: NewFood = {
  name: "",
  image: "",
  price: 0,
  description: "",
  tags: [],
};

export type Errors = {
  name?: string;
  image?: string;
  price?: string;
  description?: string;
  tags?: string;
};

export default function Admin() {
  const [food, setFood] = useState(emptyFood);
  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFood((prevFood) => ({ ...prevFood, [id]: value }));
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!food.name) {
      newErrors.name = "Name is required";
    }
    if (!food.image) {
      newErrors.image = "Image is required";
    }
    if (!food.price) {
      newErrors.price = "Price is required";
    }
    if (!food.description) {
      newErrors.description = "Description is required";
    }
    if (food.tags.length === 0) {
      newErrors.tags = "At least one tag is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    await addFood(food);
    toast.success("Food added! 🍔");
    setFood(emptyFood);
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
          value={food.image}
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
