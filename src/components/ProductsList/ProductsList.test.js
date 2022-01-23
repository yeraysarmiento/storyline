import { render, screen } from "@testing-library/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ProductsList from "./ProductsList";
import { BrowserRouter } from "react-router-dom";

library.add(faFilter);

describe("Given an ProductsList component", () => {
  describe("When it is invoked with a list of products", () => {
    test("Then it should render as many <li> as elements in the list", () => {
      const productsList = [
        {
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
        },
        {
          id: 2,
          productName: "Evergrip Jump Rope",
          productDescription:
            "Did you know that for an average-sized person, jumping rope might even burn more than 10 calories a minute. In just 30 minute jump rope sessions a day, you can build the figure you want. Jumping rope also helps with:\n- tone your calves.\n- tighten your core.\n- improve your lung capacity.\n- build stamina.",
          productImage:
            "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626333092/coding-challenge/rope.jpg",
          productPrice: 3.0,
          productCategory: "Biking",
          ads: [
            {
              id: 1,
              heading: "Heading 1",
              image:
                "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626333092/coding-challenge/rope.jpg",
              description: "This is an ad about de product 2",
            },
          ],
        },
        {
          id: 3,
          productName: "Durable Resistance band",
          productDescription:
            "Rubbery, elastic bands that you can use to strengthen your muscles at home. Resistance training is any type of exercise that uses resistance or weight to build strength in your muscles. Working out with resistance bands is one option for resistance training that allows you to work out at home using just one piece of equipment.",
          productImage:
            "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626332994/coding-challenge/resistance.jpg",
          productPrice: 25.3,
          productCategory: "Fitness",
          ads: [
            {
              id: 1,
              heading: "Heading 1",
              image:
                "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626332994/coding-challenge/resistance.jpg",
              description: "This is an ad about de product 3",
            },
          ],
        },
      ];

      render(
        <BrowserRouter>
          <ProductsList productsList={productsList} />
        </BrowserRouter>
      );

      const products = screen.getAllByRole("listitem");

      expect(products).toHaveLength(productsList.length);
    });
  });
});
