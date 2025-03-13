import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import MOCK_DATA from "../../Mock/resCardMock.json";
import "@testing-library/jest-dom";

test("should render rescard component with props", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});
