import { render, screen } from "@testing-library/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import Ad from "./Ad";

library.add(faTimes, faEdit);

describe("Given an Ad component", () => {
  describe("When it is invoked with a productName and an ad object", () => {
    test("Then it should render a <li> with a <h2> with the productName", () => {
      const productName = "Product Name";
      const ad = {
        id: 1,
        heading: "Heading",
        image: "",
        description: "Description of the product",
      };

      render(<Ad productName={productName} ad={ad} />);

      const adItem = screen.getByRole("listitem");
      const heading = screen.getByRole("heading", {
        name: /product name/i,
      });

      expect(adItem).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });
});
