import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";
import "./Header.css";

function Header() {
  const { cartItemCount } = useContext(DataContext);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <header>
      <div className="header">
        <div onClick={goToHome} className="logo">
          <h4 className="sweet">Chicken Rice</h4>
        </div>
        <div className="d-flex">
          <button onClick={goToCart}><img id="cartimg" src="/assets/carticon.png"></img></button>
          <span className="cart-count">{cartItemCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
