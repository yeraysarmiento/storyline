import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import Menu from "./components/Menu/Menu";
import IndexPage from "./pages/IndexPage/IndexPage";

library.add(fab, faChevronLeft, faFilter);

function App() {
  return (
    <>
      <Menu />
      <IndexPage />
    </>
  );
}

export default App;
