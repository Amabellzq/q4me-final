import { useContext } from "react";
import swal from "sweetalert";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import { DataContext } from "../../context/DataProvider";
import { FoodItems } from "../../appInterface";
import { Wallet } from "../../context/Wallet";
import "./Cart.css";

function Cart() {
  const { cartItems, addToCart, removeItem } = useContext(DataContext);
  // basic function for the cart
  const totalPrice = () => {
    let price = 0;
    cartItems.forEach((el) => {
      price += el.quantity! * el.price;
    });
    return price;
  };
  
  return (
    <div className="d-flex cart-outer-div">
      <Header />
      <div className="cart-body">
        {totalPrice() ? (
          <CartWithItems
            cartItems={cartItems}
            addToCart={addToCart}
            removeItem={removeItem}
            totalPrice={totalPrice()}
          />
        ) : (
          <div className="container my-5" style={{ textAlign: "center" }}>
            <img src="/assets/shopping-cart.png" width="200px" alt="icon" />
            <div className="mt-4">
              <h4 className="orange-red fw-600">Your cart is empty</h4>
              <h5 className="darkblue fw-600">
                You can go to home page to view more food items.
              </h5>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

// when cart is not empty
const CartWithItems = ({
  cartItems,
  addToCart,
  removeItem,
  totalPrice,
}: {
  cartItems: FoodItems[];
  addToCart: (item: FoodItems) => void;
  removeItem: (item: FoodItems) => void;
  totalPrice: number;
}) => {
  const checkout = () => {
    swal("Good job!", "Your order is placed successfully!", "success").then(
      () => {
        window.location.href = "/Payment";
      }
    );
  };

  return (
    <div className="container mb-12">
      <h4 className="my-4 my-cart">My Cart</h4>
      <div className="d-flex my-3" style={{ justifyContent: "space-between" }}>
        <h4 className="fw-600">Summary</h4>
      </div>
      {/* Left Section */}
      <div className="d-flex">
        <div className="row" style={{ width: "50%" }}>
          <div className="col-md-4">
            <h6>Total:</h6>
            <div className="my-3 line w-40"></div>
            <h6>Subtotal:</h6>
          </div>
          <div className="col-md-4">
            <h6>$ {totalPrice}</h6>
            <div className="my-3 line w-240"></div>
            <h6>$ {totalPrice}</h6>
          </div>
        </div>
      </div>
      <div className = "cartSelection">
        {/* Right Section */}
        <div className="d-flex my-3" style={{ justifyContent: "space-between" }}>
          <h4 className="fw-600" style={{ marginRight: "49%" }}>
            Cart
          </h4>        
        </div>
        <div className="row" style={{ width: "100%" }}>
          <div style={{ maxWidth: "100%" }} className="col-md-12">
            <ul style={{ padding: 0 }}>
              {cartItems?.map((item: FoodItems, idx: number) => (
                <li key={idx} style={{ listStyle: "none" }}>
                  <div className="cart-items">
                    <img
                      src={item.url}
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                      alt="icon"
                    />
                    <h6 className="mt-15">{"Chicken Rice"}</h6>
                    <div className="d-flex mt-10">
                      <button
                        className="remove"
                        type="button"
                        onClick={() => removeItem(item)}
                      >
                        -
                      </button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button
                        className="add"
                        type="button"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <h6 className="mt-15">{item.quantity! * item.price}</h6>
                  </div>
                  <div className="line"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Checkout Button */}
      <div id = "checkoutdiv"className="d-flex justify-content">
        <button id="checkoutbtn" onClick={checkout} className="btn btn-primary" type="button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
