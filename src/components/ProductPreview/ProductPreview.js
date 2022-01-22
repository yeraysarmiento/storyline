import "./ProductPreview.css";

function ProductPreview({ product }) {
  return (
    <li className="product">
      <img className="product__image" src={product.productImage} alt="" />
      <section className="product__information">
        <h3 className="product__description">{product.productDescription}</h3>
        <div className="product__box">
          <h4 className="product__price">
            € {product.productPrice.toFixed(2)}
          </h4>
          <p className="product__read-more">+</p>
        </div>
      </section>
    </li>
  );
}

export default ProductPreview;
