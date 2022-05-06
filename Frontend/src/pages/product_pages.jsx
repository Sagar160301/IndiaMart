import { Producthead } from "../components/pageshead/pagesHead";
import { Products } from "../components/products/products";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/pages_sidebar/pages_sidebar";
import "./product_pages.css";
import { useParams } from "react-router-dom";
export const Product_pages = ({ type }) => {
  const { category } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch(`http://localhost:9000/products/${category}`);
    let FetchedData = await res.json();
    setData(FetchedData);
  };

  return (
    <div className="flexDiv">
      <div className="flexSidebarDiv">
        <Sidebar />
      </div>
      <div className="flexmainDiv">
        {data.length == 0 ? null : (
          <>
            <Producthead productData={data} type={category}></Producthead>
            <Products products={data} type={category}></Products>
          </>
        )}
      </div>
    </div>
  );
};
