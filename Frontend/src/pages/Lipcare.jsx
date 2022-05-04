import { Producthead } from "../components/pageshead/pagesHead";
import { Products } from "../components/products/products";
import { useState } from "react";
import { Sidebar } from "../components/pages_sidebar/pages_sidebar";
import "./product pages style/product_pages.css"

export const Lipcare=()=>{
     const [data,setData]=useState({
         head:"LipCare",
         info:"Offering you a complete choice of products which include Lip Balm and Lip Gaurd.",
         products:[
             {  
                 img:"https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-500x500.jpg",
                 head:"Lip Balm",
                 info:["Protect your lips from chapping and cold bites.",

                    "Keeps your lips soft.",
                    
                    "With exotic flavors (Strawberry, Orange, Pineapple, Mix fruit, Mint & Chocolate)."]

             },
             {
                 img:"https://3.imimg.com/data3/EJ/OU/MY-3792183/lip-gaurd-500x500.jpg",
                 head:"Lip Gaurd",
                 info:["White petrolleum jelly based soothing Dressing for burns, Minot cuts, Sun Burns and Chafing.",
                    "Very helpful for dry and chapped lips.",
                    "Preventls your lips from cold bites."]

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