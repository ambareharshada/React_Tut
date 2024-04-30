import logo from "../logo.svg";

import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <>
      <div class="container">
        <div class="red">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <img className="nav-logo" src="" /> */}
            <nav>
              <ul>
                <li>
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="Menu">Menu</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="ContactUs">Contact Us</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        {/* <div class="green">2</div> */}
        <div class="blue">
          <a type="button" className="cart-button">
            <i class="bi bi-cart3"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
