import RestrauntCard from "../RestrauntCard";
import { render, screen } from "@testing-library/react";
//import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render props data inside the restaurant card component", () => {
  render(
    <RestrauntCard
      name="Louis Burger"
      cuisines="Beverages,Snacks,Fast Food"
      rating="4.2"
      imgId="19d3d352cc815b9d88b22617b41fa97b"
      cost="₹600 for two"
      ETA="5"
    />
  );
  const name = screen.getByText("Louis Burger");
  expect(name).toBeInTheDocument();
});
