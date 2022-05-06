import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import "./carousel.css";

export const Carousel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:9000/proudctService");
      let allData = await res.json();
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="carousel">
      <OwlCarousel className="owl-theme" loop margin={10} nav items={4}>
        {data.length == 0
          ? null
          : data.map((el) => {
              return (
                <div class="item" key={el.id}>
                  <img src={el.image} alt="" />
                  <div className="caro">
                    <h3>{el.name}</h3>
                    <button>Get Best Quote</button>
                  </div>
                </div>
              );
            })}
      </OwlCarousel>
    </div>
  );
};
