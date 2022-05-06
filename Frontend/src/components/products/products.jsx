import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../Redux/cart/action";
import "./products.css";
export const Products = ({ products, type }) => {
  const dispatch = useDispatch();
  // console.log(products, type);
  const navigate = useNavigate();
  return (
    <div className="allProductsDiv">
      {type !== "lipstick" ? (
        products.map((e) => {
          return (
            <div className="singleProductDetails">
              <div className="singleProductDetailsLeftSideDiv">
                <div className="singleProductDetailsDiv">
                  <img className="singleProductDetailsImg" src={e.image} />
                </div>
                <p>Interested in this product?</p>
              </div>
              <div className="singleProductDetailsInfo">
                <h2 className="singleProductDetailsHead">{e.name}</h2>
                <h4 className="singleProductDetailsGetLatestPrice">
                  Get Latest Price
                </h4>
                <ul>
                  <li>Easy spreading, water proof, Non oily formula.</li>
                  <li>Enriched with Vitamin-E and Aloe vera.</li>
                  <li>Improves natural skin texure.</li>
                  <li>
                    Controls Sebum to give your facial skin a flawless matt
                    finish all day long.
                  </li>
                </ul>
                <div className="singleProductDetailsButtonDiv">
                  <button
                    className="singleProductDetailsButton"
                    onClick={() => {
                      dispatch(addCart(e));
                      navigate("/cartPage");
                    }}
                  >
                    Yes, I am interested!
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="LipstickOuterdiv">
          {products.map((e) => {
            return (
              <div className="ListickDiv">
                <h2 className="singleProductDetailsHead">{e.head}</h2>
                <div className="LipsticImgDiv">
                  <img src={e.image} />
                </div>
                <h4 className="singleProductDetailsGetLatestPrice">
                  Get Latest Price
                </h4>
                <button className="singleProductDetailsButton">
                  Ask for Details
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
