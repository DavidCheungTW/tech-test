import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import SlideShow from "../components/SlideShow";

describe("SlideShow", () => {
  const validProps = {
    results: [
      { href: "image-href1", title: "image-title1" },
      { href: "image-href2", title: "image-title2" },
      { href: "image-href3", title: "image-title3" },
    ],
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <SlideShow results={validProps.results} />
    );

    expect(rendered).toMatchSnapshot();
  });
});
