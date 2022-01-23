import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.png";
import "./Ad.css";
import useCurrentAd from "../../hooks/useCurrentAd";
import { useNavigate } from "react-router-dom";

function Ad({ product, ad, onModal }) {
  const { loadCurrentAd } = useCurrentAd();
  const navigate = useNavigate();

  const onEdit = () => {
    loadCurrentAd(ad);
    navigate("/products/edit");
  };

  return (
    <li className="fb-ad">
      <div className="fb-ad__header">
        <img
          className="fb-ad__icon"
          src={logo}
          alt="Logo of Storyline"
          width="30"
          height="30"
        />
        <div className="fb-ad__headings">
          <h3 className="fb-ad__title">Storyline</h3>
          <p className="fb-ad__subtitle">Your online Sports Goods Shop</p>
        </div>
        <FontAwesomeIcon
          className="fb-ad__delete"
          icon="times"
          onClick={() => onModal(ad.id, product.id)}
        />
      </div>
      <img
        className="fb-ad__image"
        src={ad.image}
        alt={`An ad of ${product.productName}`}
      />
      <div className="fb-ad__footer">
        <h2 className="fb-ad__product-name">{ad.heading.toUpperCase()}</h2>
        <p className="fb-ad__description">{ad.description}</p>
        <div className="fb-ad__action">
          <FontAwesomeIcon
            className="fb-ad__edit"
            icon="edit"
            onClick={() => onEdit()}
          />
          <button className="fb-ad__see-more">See more!</button>
        </div>
      </div>
    </li>
  );
}

export default Ad;
