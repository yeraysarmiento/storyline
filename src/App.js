import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Menu from "./components/Menu/Menu";

library.add(fab, faChevronLeft);

function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
