import "./ProductPreview.css";

function ProductPreview({ product }) {
  return (
    <li className="product-preview">
      <img
        className="product-preview__image"
        src={product.productImage}
        alt={product.productName}
      />
      <section className="product-preview__information">
        <h3 className="product-preview__description">
          {product.productDescription}
        </h3>
        <div className="product-preview__box">
          <h4 className="product-preview__price">
            € {product.productPrice.toFixed(2)}
          </h4>
          <p className="product-preview__read-more">+</p>
        </div>
      </section>
    </li>
  );
}

export default ProductPreview;
