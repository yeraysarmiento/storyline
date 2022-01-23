import { Link, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import Ad from "../../components/Ad/Ad";
import "./ReadPage.css";

function ReadPage({ productsList }) {
  const { idProduct } = useParams();

  const [currentProduct] = productsList.filter(
    (product) => product.id === +idProduct
  );

  return (
    <main className="read-container">
      <h2 className="title">{currentProduct.productName.toUpperCase()}</h2>
      <Product product={currentProduct} />
      <h2 className="title title--ads">
        Ads for the product: <br />'{currentProduct.productName.toUpperCase()}'
      </h2>
      <p className="ads-total">
        {currentProduct.ads.length}
        {currentProduct.ads.length > 1 ? " ads" : " ad"}
      </p>
      <ul className="fb-ads">
        <Link to="/products/new">
          <li className="create-ad">
            <span>+</span>CREATE NEW AD
          </li>
        </Link>
        {currentProduct.ads.map((ad) => (
          <Ad ad={ad} productName={currentProduct.productName} key={ad.id} />
        ))}
      </ul>
    </main>
  );
}

export default ReadPage;
