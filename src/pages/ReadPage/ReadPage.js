import { Link, useParams, useNavigate } from "react-router-dom";
import Product from "../../components/Product/Product";
import Ad from "../../components/Ad/Ad";
import "./ReadPage.css";
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import Modal from "../../components/Modal/Modal";
import useCurrentAd from "../../hooks/useCurrentAd";

function ReadPage({ productsList }) {
  let navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const { deleteAd } = useProducts();
  const { deleteCurrentAd } = useCurrentAd();
  const { idProduct } = useParams();

  const [currentProduct] = productsList.filter(
    (product) => product.id === +idProduct
  );

  const openModal = (idAd, idProduct) => {
    setIsDeleting(true);
    setDeleteData({
      idAd,
      idProduct,
    });
  };

  const confirmDeletion = () => {
    deleteAd(deleteData.idAd, deleteData.idProduct);
    setIsDeleting(false);
    navigate("/products");
  };

  return (
    <>
      {isDeleting ? (
        <Modal onDelete={confirmDeletion} />
      ) : (
        <main className="read-container">
          {!currentProduct ? (
            <h3>Loading...</h3>
          ) : (
            <>
              <h2 className="title">
                {currentProduct.productName.toUpperCase()}
              </h2>
              <Product product={currentProduct} />
              <h2 className="title title--ads">
                Ads for the product: <br />'
                {currentProduct.productName.toUpperCase()}'
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
                  <Ad
                    ad={ad}
                    product={currentProduct}
                    key={ad.id}
                    onModal={openModal}
                  />
                ))}
              </ul>
            </>
          )}
        </main>
      )}
    </>
  );
}

export default ReadPage;
