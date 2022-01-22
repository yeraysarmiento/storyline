import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.png";
import "./Menu.css";

function Menu() {
  return (
    <header className="menu">
      <h1 className="heading">
        <img src={logo} alt="Logo of Storyline Shop" width="36" height="36" />
      </h1>
      <div className="menu__element">
        <FontAwesomeIcon className="menu__arrow" icon="chevron-left" />
        <p className="menu__goback">Go Back</p>
      </div>
    </header>
  );
}

export default Menu;
