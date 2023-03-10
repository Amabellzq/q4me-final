import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FoodItems } from "../../appInterface";
import { DataContext } from "../../context/DataProvider";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import "./Dashboard.css";

function Dashboard() {
  const { Mains } = useContext(DataContext);

  const navigate = useNavigate();

  const foodDetails = (item: FoodItems) => {
    navigate("/food-details", { state: item });
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="DASH">
        <div className="container mb-12">
          <h4 className="my-4 fw-600 d-blue">Mains</h4>
          <div className="row">
            {Mains.map((items: FoodItems, idx: number) => (
              <div
                key={idx}
                className="col-md-4 pointer"
                onClick={() => foodDetails(items)}
              >
                <img
                  src={items.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />

                <h5 className="fw-600 black">{items.name}</h5>
                
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
