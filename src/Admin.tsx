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

export type Touched = {
  name?: string;
  image?: string;
  price?: string;
  description?: string;
  tags?: string;
};

type FormStatus = "idle" | "submitting" | "submitted" | "error";

export default function Admin() {
  const [food, setFood] = useState(emptyFood);
  const [touched, setTouched] = useState<Touched>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFood((prevFood) => ({ ...prevFood, [id]: value }));
  };

  function validate() {
    const newErrors: Errors = {};
    if (!food.name) {
      newErrors.name = "Name is required";
    }
    if (!food.image) {
      newErrors.image = "Image filename is required";
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
    return newErrors;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (status === "submitting") return;

    setStatus("submitting");
    if (!isValid) {
      setStatus("submitted");
      return;
    }

    await addFood(food);
    toast.success("Food added! 🍔");
    setStatus("idle");
    setFood(emptyFood);
    setTouched({});
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setTouched((currentTouched) => ({ ...currentTouched, [id]: true }));
  };

  const handleError = (id: keyof Errors) => {
    return status === "submitted" || touched[id] ? errors[id] : "";
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
          onBlur={handleBlur}
          value={food.name}
          error={handleError("name")}
        />
        <Input
          id="description"
          label="Description"
          className="my-4"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={food.description}
          error={handleError("description")}
        />
        <Input
          id="price"
          label="Price"
          className="my-4"
          type="number"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={food.price}
          error={handleError("price")}
        />
        <Input
          id="image"
          label="Image filename"
          className="my-4"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={food.image}
          error={handleError("image")}
        />
        <CheckboxList
          legend="Tags"
          error={status === "submitted" ? errors.tags : undefined}
        >
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
          {status === "submitting" ? "Saving..." : "Save"}
        </Button>
      </form>
    </>
  );
}
