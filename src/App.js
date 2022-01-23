import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faFilter,
  faTimes,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import IndexPage from "./pages/IndexPage/IndexPage";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ReadPage from "./pages/ReadPage/ReadPage";
import useProducts from "./hooks/useProducts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FormPage from "./pages/FormPage/FormPage";

library.add(faChevronLeft, faFilter, faTimes, faEdit);

function App() {
  const { getProducts } = useProducts();
  const { products } = useSelector((store) => store);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={<IndexPage productsList={products} />}
        />
        <Route
          path="/products/:idProduct"
          element={<ReadPage productsList={products} />}
        />
        <Route path="/products/edit" element={<FormPage />} />
        <Route path="/products/new" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
