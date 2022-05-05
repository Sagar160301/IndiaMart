import "./pages_sidebar.css"
import { useState } from "react"
import  up from "./up.png"
import down from "./down.png"
export const Sidebar=()=>{
    const [sidebar,setSidebar]=useState({
        Makeup:false,
        Lipstick:false,
        LipsProducts:false,
        BleachCream:false,
        Scrubs:false,
        EyesProducts:false,
        LipCare:false,
        TraditionalItems:false

    })
    const updateSidebar=(data)=>{
       console.log(data.id)
        setSidebar({
            ...sidebar,
            [data.id]:!sidebar[data.id]
        })
    }
    console.log(sidebar)
    return <div className="sidebarDiv">
         <div className="sidebarHead">Products & Services</div>
  
       <div  id="Makeup" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                   <p className="sidebarPageHead">Makeup</p> 
                  {sidebar.Makeup===false ? <p className="sidebarAvailable">4 products available</p>:null}
            </div> 
                  {sidebar.Makeup===true ? <img id="Makeup"  className="selectImg" src={up}/>:<img id="Makeup" className="selectImg" src={down}/>}
            </div>
            {sidebar.Makeup===true ? <div className="categoryDiv">
                                               <p>Foundation</p>
                                               <p>Compact</p>
                                               <p>Pan Cake Foundation</p>
                                               <p>Pan Stick Foundation</p>
                                    </div>:null}
       </div>
       

            <div  id="Lipstick" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p className="sidebarPageHead">Lipstick</p> 
                {sidebar.Lipstick===false ?<p className="sidebarAvailable">9 products available</p>:null}
            </div> 
            {sidebar.Lipstick===true ? <img id="Lipstick"  className="selectImg" src={up}/>:<img id="Lipstick" className="selectImg" src={down}/>}
            </div>
            {sidebar.Lipstick===true ? <div className="categoryDiv">
                                            <p>Cerise Pink Lipstick</p>
                                            <p>Coral Red Lipstick</p>
                                            <p>Desert Rose Lipstick</p>
                                            <p>Eternal Red Lipstick</p>
                                            <p> Muddy Pink Lipstick</p>
                                            <p>Pretty Purple Lipstick</p>
                                            <p>Radient Red Lipstick</p>
                                            <p>Baked Brick Lipstick</p> 
           
                                        </div>:null}
            </div>
       
            <div  id="LipsProducts" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p className="sidebarPageHead">Lips Products</p> 
                {sidebar.LipsProducts===false ?<p className="sidebarAvailable">3 products available</p>:null}
            </div> 
            {sidebar.LipsProducts===true ? <img id="LipsProducts"  className="selectImg" src={up}/>:<img id="LipsProducts" className="selectImg" src={down}/>}
            </div>
            {sidebar.LipsProducts===true ? <div className="categoryDiv">
            <p>Lip Gloss</p>
            <p>Lip Stick</p>
            <p>Lip Liner</p>
        </div>:null}
            </div>
       
            <div  id="BleachCream" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p className="sidebarPageHead">Bleach Cream</p> 
                {sidebar.BleachCream===false ?<p className="sidebarAvailable">3 products available</p>:null}
            </div> 
            {sidebar.BleachCream===true ? <img id="BleachCream"  className="selectImg" src={up}/>:<img id="BleachCream" className="selectImg" src={down}/>}
            </div>
            {sidebar.BleachCream===true ? <div className="categoryDiv">
            <p>Fruit Bleach</p>
            <p>Gold Bleach</p>
            <p>Personal Bleach</p>
        </div>:null}
            </div>
       
            <div  id="Scrubs" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p className="sidebarPageHead">Scrubs</p> 
               {sidebar.Scrubs===false ? <p className="sidebarAvailable">3 products available</p>:null}
            </div> 
            {sidebar.Scrubs===true ? <img id="Scrubs"  className="selectImg" src={up}/>:<img id="Scrubs" className="selectImg" src={down}/>}
            </div>
            {sidebar.Scrubs===true ? <div className="categoryDiv">
            <p>Fairness Scrub</p>
            <p>Mix Fruit Scrub</p>
            <p>Facial Scrub-Walnut & Apricot</p>
        </div>:null}
            </div>
       
            <div  id="EyesProducts" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p className="sidebarPageHead">Eyes Products</p> 
                {sidebar.EyesProducts===false ? <p className="sidebarAvailable">3 products available</p>:null}
            </div> 
            {sidebar.EyesProducts===true ? <img id="EyesProducts"  className="selectImg" src={up}/>:<img id="EyesProducts" className="selectImg" src={down}/>}
            </div>
            {sidebar.EyesProducts===true ? <div className="categoryDiv">
           <p>Mascara</p>
           <p>Eye Shadow</p>
           <p>Eye Liner</p>
        </div>:null}
            </div>

            <div  id="LipCare" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p className="sidebarPageHead">LipCare</p> 
                {sidebar.LipCare===false ? <p className="sidebarAvailable">2 products available</p>:null}
            </div> 
            {sidebar.LipCare===true ? <img id="LipCare"  className="selectImg" src={up}/>:<img id="LipCare" className="selectImg" src={down}/>}
            </div>
            {sidebar.LipCare===true ? <div className="categoryDiv">
            <p>Lip Balm</p>
            <p>Lip Gaurd</p>
        </div>:null}
            </div>

            <div  id="TraditionalItems" className="categorysMainDiv"  onClick={(e)=>updateSidebar(e.target)}>
            <div className="sidebarDivs">
            <div>
                <p className="sidebarPageHead">  Traditional Items</p> 
               {sidebar.TraditionalItems===false ? <p className="sidebarAvailable">2 products available</p>:null}
            </div> 
            {sidebar.TraditionalItems===true ? <img id="TraditionalItems"  className="selectImg" src={up}/>:<img id="TraditionalItems" className="selectImg" src={down}/>}
            </div>
            {sidebar.TraditionalItems===true ? <div className="categoryDiv">
            <p>Sindoor</p>
            <p>Kajal</p>
        </div>:null}
            </div>
          
       <div className="sidebarViewAll"><h3>+View All</h3></div>
    </div>
}