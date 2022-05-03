import { ContactUs } from "../components/contactus/contactUs";
import { HomeAbout } from "../components/HomeAbout/about";
import { HomeReviews } from "../components/HomeReview/homeReview";
import { ProductService } from "../components/productService/product";

export const Home = () => {
  return (
    <div>
      <HomeAbout />
      <ProductService />
      <HomeReviews />
      <ContactUs />
    </div>
  );
};
