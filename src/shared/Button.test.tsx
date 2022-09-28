import Button from "./Button";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

describe("Button", () => {
  it("should render children", () => {
    render(<Primary />);
    expect(screen.getByRole("button", { name: "Click me" }));
  });

  it("should set a custom css class", () => {
    render(
      <Button type="button" className="custom">
        Click me
      </Button>
    );
    expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
      "custom"
    );
  });

  it("should set the correct type prop", () => {
    render(<Button type="submit">Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toHaveAttribute(
      "type",
      "submit"
    );
  });

  it("should set the button variant", () => {
    render(
      <Button type="button" variant="primary">
        Click me
      </Button>
    );
    expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
      "bg-blue-500"
    );
  });
});
