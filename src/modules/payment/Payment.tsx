import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import { DataContext } from "../../context/DataProvider";
// import {useWallet} from "@solana/wallet-adapter-react";
import { Wallet } from "../components/ConnectWallet"
// import GetBalanceWeb3 from "../components/GetBalanceWeb3";
// import GetBalanceRpc from "../components/GetBalanceRpc";
// import GetAccountInfo from "../components/GetAccountInfo";
// import GetTokenBalance from "../components/GetTokenBalance";
// import TransferLamports from "../components/TransferLamports";
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
                <Wallet>
                  
                </Wallet>
              </div>
              <div className="col-md-4" style={{ cursor: "pointer" }}>
                <div className="solanaPay">
                   <button className="btn btn-primary">Connect to Solana </button>       { /*          {onPress={connect} */}
                </div>
                <div className="cashpayment">
                  <button className="btn btn-primary" type="button">Pay By Cash</button>
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
