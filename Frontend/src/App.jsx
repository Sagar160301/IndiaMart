

import './App.css'
import {Makeup} from "./componants/Makeup"
import {Lipstick} from "./componants/Lipstick"
import {LipsProducts} from "./componants/Lips_Products"
import {BleachCream} from "./componants/Bleach_Cream"
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
          
        
    </div>
  )
}

export default App
