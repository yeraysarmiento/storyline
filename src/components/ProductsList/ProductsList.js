import "./ProductsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductPreview from "../ProductPreview/ProductPreview";

function ProductsList() {
  return (
    <article className="products-list">
      <div className="sort">
        <p className="sort__text">Sort</p>
        <FontAwesomeIcon className="sort__icon" icon="filter" />
      </div>
      <ul className="products-list__container">
        <ProductPreview />
        <ProductPreview />
      </ul>
    </article>
  );
}

export default ProductsList;
