import { Route, Routes } from "react-router-dom";
import "./allroute.css";
import { Home } from "./Home";

import { ContactUs } from "../components/contactus/contactUs";

import { HomeReviews } from "../components/HomeReview/homeReview";

import { RelatedCategories } from "../components/relatedCategories/relatedCategories";
import { RelatedProduct } from "../components/relatedProduct/relatedProduct";
import { SimilarProduct } from "../components/similarCatogory/similarCategory";
import { AboutSection } from "./About";
import { Navbar } from "../components/Navbar/Navbar";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/footer/Footer";

export const AllRoute = () => {
  return (
    <div id="Landing">
      <Navbar />
      <Header />
      <Navbar2 />
      <div id="Body">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutUs" element={<AboutSection />}></Route>
        </Routes>
        <HomeReviews />
        <ContactUs />
        <SimilarProduct />
        <RelatedProduct />
        <RelatedCategories />
        <Footer />
      </div>
    </div>
  );
};
