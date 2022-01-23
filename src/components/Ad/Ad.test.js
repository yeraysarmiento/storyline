import { render, screen } from "@testing-library/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import Ad from "./Ad";
import configureStore from "../../redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

library.add(faTimes, faEdit);

describe("Given an Ad component", () => {
  const store = configureStore();

  describe("When it is invoked with a productName and an ad object", () => {
    test("Then it should render a <li> with a <h2> with the productName", () => {
      const product = {
        id: 1,
        productName: "Good ol' Dumbbells",
        productDescription:
          "This equipment helps you perform joint-isolation exercises such as biceps curls, chest flyes or shoulder raises. Using dumbbells for full-body, multiplanar movements, however, can provide a variety of different strength outcomes. It also offers many benefits for cardiorespiratory fitness and flexibility",
        productImage:
          "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
        productPrice: 14.5,
        productCategory: "Fitness",
        ads: [
          {
            id: 1,
            heading: "Heading 1",
            image:
              "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
            description: "This is an ad about de product 1",
          },
          {
            id: 2,
            heading: "Heading 2",
            image:
              "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
            description: "This is another ad about de product 1",
          },
        ],
      };
      const ad = {
        id: 1,
        heading: "Heading",
        image: "",
        description: "Description of the product",
      };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Ad product={product} ad={ad} onModal={() => {}} />
          </BrowserRouter>
        </Provider>
      );

      const adItem = screen.getByRole("listitem");
      const heading = screen.getByRole("heading", {
        name: ad.heading.toUpperCase(),
      });

      expect(adItem).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });
});
