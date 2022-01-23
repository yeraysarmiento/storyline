import Filters from "../../components/Filters/Filters";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./IndexPage.css";

function IndexPage({ productsList }) {
  return (
    <main className="index-container">
      {!productsList.length ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2 className="title">AVAILABLE PRODUCTS</h2>
          <Filters />
          <ProductsList productsList={productsList} />
        </>
      )}
    </main>
  );
}

export default IndexPage;
