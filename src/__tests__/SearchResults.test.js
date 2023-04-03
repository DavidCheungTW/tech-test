import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";
import renderer from "react-test-renderer";

describe("SearchResults", () => {
  const validProps = ["image-href1", "image-href2", "image-href3"];

  test("Renders as expected", () => {
    const rendered = renderer.create(<SearchResults results={validProps} />);

    expect(rendered).toMatchSnapshot();
  });

  test("Assert 3 images are present", () => {
    render(<SearchResults results={validProps} />);

    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(3);
  });
});
