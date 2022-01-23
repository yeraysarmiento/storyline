import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faFilter,
  faTimes,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import IndexPage from "./pages/IndexPage/IndexPage";
import initializeServer from "./server/index";
import { Routes, Route, Navigate } from "react-router-dom";

import storylineData from "./server/storylineData.js";
import ReadPage from "./pages/ReadPage/ReadPage";

initializeServer();

library.add(fab, faChevronLeft, faFilter, faTimes, faEdit);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route
        path="/products"
        element={<IndexPage productsList={storylineData} />}
      />
      <Route
        path="/products/:idProduct"
        element={<ReadPage productsList={storylineData} />}
      />
    </Routes>
  );
}

export default App;
