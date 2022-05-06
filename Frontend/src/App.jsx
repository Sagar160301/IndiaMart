import "./App.css";

<<<<<<< HEAD
<<<<<<< HEAD
=======

import { Home } from "./pages/Home";
//  import {LoginPage} from "./components/loginComponents/loginpage"
// import {Edit_profile} from "./components/edit_Profile/edit_profile"


>>>>>>> 037258c436094baa03c2206ca6491f843e67e735
=======
>>>>>>> sagar
import { AllRoute } from "./pages/allroute";
import { LoginPage } from "./components/loginComponents/loginpage";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 037258c436094baa03c2206ca6491f843e67e735
=======
>>>>>>> sagar
      <Routes>
        <Route path="*" element={<AllRoute />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
      </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
=======


      {/* <Home /> */}
      {/* <LoginPage/> */}
      {/* <Edit_profile/> */}

      <AllRoute />


>>>>>>> 037258c436094baa03c2206ca6491f843e67e735
=======
>>>>>>> sagar
    </div>
  );
}

export default App;
