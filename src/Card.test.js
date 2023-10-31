import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders", () => {
    render(<Card />);
  });
  
  it("matches snapshot", () => {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
