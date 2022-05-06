import "./App.css";


import { Home } from "./pages/Home";
//  import {LoginPage} from "./components/loginComponents/loginpage"
// import {Edit_profile} from "./components/edit_Profile/edit_profile"


import { AllRoute } from "./pages/allroute";
import { LoginPage } from "./components/loginComponents/loginpage";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./pages/ContactUs";
import { AboutSection } from "./pages/About";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="*" element={<AllRoute />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
      </Routes>


      {/* <Home /> */}
      {/* <LoginPage/> */}
      {/* <Edit_profile/> */}

      <AllRoute />


    </div>
  );
}

export default App;
