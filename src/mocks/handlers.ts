// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("http://localhost:3001/foods", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Burger",
          image: "burger.jpg",
          price: 8.99,
          description:
            "This ain't your average burger. Topped with our tangy cheddar cheese sauce, fresh lettuce, and tomato.",
          tags: ["Lunch", "Dinner"],
        },
        {
          id: 2,
          name: "Banana Blueberry French Toast",
          image: "banana-french-toast.jpg",
          price: 9.99,
          description: "Delicious french toast with banana and blueberry.",
          tags: ["Breakfast"],
        },
        {
          id: 3,
          name: "Cajun Pasta",
          image: "cajun-pasta.jpg",
          price: 16.99,
          description:
            "Creole-style pasta that's guaranteed to make you sweat.",
          tags: ["Lunch", "Dinner", "Spicy"],
        },
      ])
    );
  }),
];
