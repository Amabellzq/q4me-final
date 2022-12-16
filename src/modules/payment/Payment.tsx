import { useContext, useState, useEffect, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import { DataContext } from "../../context/DataProvider";
import { Wallet } from "../../context/Wallet";
import TransferLamports from "../components/TransferLamports";
import "./Payment.css";

function Payment() {
  const { addToCart, removeItem } = useContext(DataContext);
  const navigate = useNavigate();
  // const wallet = useWallet();
  // const { publicKey } = useWallet();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="d-flex food-details-outer">
      <Header />
      <div className="food-details">
        <div className="container mb-5">
          <div className="container mb-5">
            <h4 className="my-4 fw-600">Payment Methods</h4>
            <div className="row">
              <div className="col-md-4" style={{ cursor: "pointer" }}>
              </div>
              <div className="col-md-4" style={{ cursor: "pointer" }}>
                <div className="solanaPay">
                    <Wallet />
                </div>
                <div className="cashpayment">
                  <button id="cashbtn" className="btn btn-primary" type="button">Pay By Cash</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
