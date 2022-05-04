import { Producthead } from "../components/pageshead/pagesHead";
import { Products } from "../components/products/products";
import { useState } from "react";
import { Sidebar } from "../components/pages_sidebar/pages_sidebar";
import "./product pages style/product_pages.css"

export const LipsProducts=()=>{
     const [data,setData]=useState({
         head:"Lips Products",
         info:"Manufacturer of a wide range of products which include Lip Gloss, Lip Stick and Lip Liner.",
         products:[
             {  
                 img:"https://3.imimg.com/data3/RK/XF/MY-3792183/01-500x500.jpg",
                 head:"Lip Gloss",
                 info:["Gives your lips a aqua shiny look.",
                    "Gives a plumping look of lips.",
                    "Protect your lips from cracking, cold bites."]

             },
             {
                 img:"https://3.imimg.com/data3/DG/QO/MY-3792183/lipstick-500x500.jpg",
                 head:"Lip Stick",
                 info:["Non bleeding, non feathering formula",
                    "Gives rich n creamy feel.",
                    "Provides intense colour.",
                    "Smooth gliding technology",
                    "Increases elasticity and softness of lips",
                    "Stays for hours on lips.",
                    "Gives full coverage."]

            },
            {
                 img:"https://3.imimg.com/data3/KE/XS/MY-3792183/lip-liner-500x500.jpg",
                 head:"Lip Liner",
                 info:["Enriched with vitamins",
                    "Colour dense formula",
                    "Stays for hurs",
                    "Aid precision lining at one writing.",
                    "Easy to carry.",
                    "Self sharpening and recractable",
                    "With sharpener for extra sharpening.",
                    "Available"]

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