import { Producthead } from "../components/pageshead/pagesHead";
import { Products } from "../components/products/products";
import { useState } from "react";
import { Sidebar } from "../components/pages_sidebar/pages_sidebar";
import "./product pages style/product_pages.css"

export const Scrub=()=>{
     const [data,setData]=useState({
         head:"Scrubs",
         info:"Leading Manufacturer of Fairness Scrub, Mix Fruit Scrub and Facial Scrub - Walnut & Apricot from New Delhi.",
         products:[
             {  
                 img:"https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-500x500.jpg",
                 head:"Fairness Scrub",
                 info:["Skin undergoes a natural renewal process where upper skin cells become dead and accumulated with other impurities, hiding skin's freshest layer. Blue heaven's unique deep root exfoliating formula blended with mild surfactants. Fairness vitamins and aloe vera to serve."]

             },
             {
                 img:"https://3.imimg.com/data3/UL/IY/MY-3792183/mix-fruit-scrub-500x500.jpg",
                 head:"Mix Fruit Scrub",
                 info:["Blue heaven's unique deep root exfoliating formula serves you removel of dead skin cell, dirt and blackheads from your delicate facial skin.","It's cleasing particles unclog pores and mild surfactants gently cleanse the pores deep inside."]

            },
            {
                 img:"https://3.imimg.com/data3/GR/XE/MY-3792183/facial-scrub-walnut-apricot-500x500.jpg",
                 head:"Facial Scrub - Walnut & Apricot",
                 info:["Blue heaven 's unique deep root exfoliating formula serves you, removed of dead skin cells, dirt & blackheads from your delicate facial skin. It's walnut shell particles unclog pores and mild surfactants gently cleans the pores from deep inside leaving a soft."]

            },
         
        ]
     })

     return <div className="flexDiv">
          <div className="flexSidebarDiv">
             <Sidebar/>
         </div>
         <div className="flexmainDiv">
         <Producthead productData={data}></Producthead>
         <Products products={data}></Products>
         </div>
     </div>
 }