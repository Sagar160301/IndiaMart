import { useEffect, useState } from "react";
import { SingleProduct } from "./eachProduct";
import "./similarCategory.css";

export const SimilarProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:9000/similarCategory");
      let e = await res.json();
      setData(e);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="similarCategorySection">
      <h1>Ready to Ship Products in Similar Categories</h1>
      <div id="similarCategory">
        {data.length == 0
          ? null
          : data.map((el) => {
              return <SingleProduct el={el} key={el.id} />;
            })}
      </div>
      <div id="form">
        <h3>Tell us what you need, and we'll help you get quotes</h3>
        <form action="">
          <div className="flex form">
            <p>I want quotes for</p>
            <input
              type="text"
              name="product"
              placeholder="Cosmetics, Hair & Beauty Products"
            />
          </div>
          <div className="flex form">
            <p>Quantity</p>
            <div>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" value={"Piece"} readOnly />
            </div>
          </div>
          <div className="flex form">
            <p>Briefly describe your requirement</p>
            <input
              type="text"
              name="product"
              placeholder="Additional details about requirement"
            />
          </div>
          <input type="submit" value="Submit Requirement" className="btn" />
        </form>
      </div>
    </div>
  );
};
