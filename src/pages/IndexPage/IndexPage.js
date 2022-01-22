import Filters from "../../components/Filters/Filters";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./IndexPage.css";

function IndexPage({ productsList }) {
  return (
    <div className="index-container">
      <h2 className="title">AVAILABLE PRODUCTS</h2>
      <Filters />
      <ProductsList productsList={productsList} />
    </div>
  );
}

export default IndexPage;
