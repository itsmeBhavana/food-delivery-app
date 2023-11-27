import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("test cases of contact us page", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("Should load the text boxes",()=>{
    render(<Contact/>);
    const inputboxes=screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  })
  test("Should contact Submit button",()=>{
    render(<Contact/>);
    const button=screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  })
});
