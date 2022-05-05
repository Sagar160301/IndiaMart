import { Route, Routes } from "react-router-dom";
import "./allroute.css";
import { Home } from "./Home";

import { ContactUs } from "../components/contactus/contactUs";

import { HomeReviews } from "../components/HomeReview/homeReview";

import { RelatedCategories } from "../components/relatedCategories/relatedCategories";
import { RelatedProduct } from "../components/relatedProduct/relatedProduct";
import { SimilarProduct } from "../components/similarCatogory/similarCategory";
import { AboutSection } from "./About";

export const AllRoute = () => {
  return (
    <div id="Landing">
      <div id="Body">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutUs" element={<AboutSection />}></Route>
          <Route></Route>
        </Routes>
        <HomeReviews />
        <ContactUs />
        <SimilarProduct />
        <RelatedProduct />
        <RelatedCategories />
      </div>
    </div>
  );
};
