import "./ProductsList.css";

function ProductsList() {
  return (
    <ul className="products-list">
      <li className="product">
        <img className="product__image" src="" alt="" />
        <section className="product__information">
          <h3 className="product__description">
            Text for a description of the product
          </h3>
          <h4 className="product__price">€ 14.50</h4>
          <i className="product__read-more">+</i>
        </section>
      </li>
    </ul>
  );
}

export default ProductsList;
