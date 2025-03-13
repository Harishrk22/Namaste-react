import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_API_DATA from "../../Mock/mockApiBodyData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_API_DATA);
    },
  });
});

test("should search res list for 'p' input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsOnLoad = await screen.findAllByTestId("resCard");
  expect(cardsOnLoad.length).toBe(8);

  const searchInput = await screen.findByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "p" } });

  const cardsOnSearch = await screen.findAllByTestId("resCard");
  expect(cardsOnSearch.length).toBe(3);
});

test("should test top rated rest click event", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(filterBtn);
  const cardsOnFilter = await screen.findAllByTestId("resCard");
  expect(cardsOnFilter.length).toBe(7);
});
