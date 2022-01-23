import "./Product.css";

function Product({ product }) {
  return (
    <article className="product">
      <div className="product__box">
        <img
          className="product__image"
          src={product.productImage}
          alt={product.productName}
        />
        <p className="product__price">
          Price: € {product.productPrice.toFixed(2)}
        </p>
      </div>
      <p className="product__description">{product.productDescription}</p>
    </article>
  );
}

export default Product;
