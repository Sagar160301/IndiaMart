

import './App.css'
import {Makeup} from "./pages/Makeup"
import {Lipstick} from "./pages/Lipstick"
import {LipsProducts} from "./pages/Lips_Products"
import {BleachCream} from "./pages/Bleach_Cream"
import {EyeProduct} from "./pages/Eye_Products"
import {Lipcare} from "./pages/Lipcare"
import {Scrub} from "./pages/Scrubs."

function App() {
   

  return (
    <div className="App">
     
 
       <Makeup/>
        <hr></hr>
        <Lipstick/>
        <hr></hr>
        <LipsProducts/>
        <hr></hr>
        <BleachCream/>
          <hr></hr>
          <Scrub/>
          <hr></hr>
        <EyeProduct/>
        <hr></hr>
        <Lipcare/>
    </div>
  )
}

export default App
