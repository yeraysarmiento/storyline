import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import IndexPage from "./pages/IndexPage/IndexPage";
import initializeServer from "./server/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import storylineData from "./server/storylineData.js";

initializeServer();

library.add(fab, faChevronLeft, faFilter);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={<IndexPage productsList={storylineData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
