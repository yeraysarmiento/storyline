import "./ProductPreview.css";

function ProductPreview() {
  return (
    <li className="product">
      <img
        className="product__image"
        src="https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg"
        alt=""
      />
      <section className="product__information">
        <h3 className="product__description">
          This equipment helps you perform joint-isolation exercises such as
          biceps curls, chest flyes or shoulder raises. Using dumbbells for
          full-body, multiplanar movements, however, can provide a variety of
          different strength outcomes. It also offers many benefits for
          cardiorespiratory fitness and flexibility
        </h3>
        <div className="product__box">
          <h4 className="product__price">€ 14.50</h4>
          <p className="product__read-more">+</p>
        </div>
      </section>
    </li>
  );
}

export default ProductPreview;
