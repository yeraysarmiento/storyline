import "./ProductsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductPreview from "../ProductPreview/ProductPreview";

function ProductsList({ productsList }) {
  return (
    <article className="products-list">
      <div className="sort">
        <p className="sort__text">Sort</p>
        <FontAwesomeIcon className="sort__icon" icon="filter" />
      </div>
      <ul className="products-list__container">
        {productsList.map((product) => (
          <ProductPreview product={product} key={product.id} />
        ))}
      </ul>
    </article>
  );
}

export default ProductsList;
