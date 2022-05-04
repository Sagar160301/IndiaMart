import { Producthead } from "../components/pageshead/pagesHead";
import { Products } from "../components/products/products";
import { useState } from "react";
import { Sidebar } from "../components/pages_sidebar/pages_sidebar";
import "./product pages style/product_pages.css"

export const EyeProduct=()=>{
     const [data,setData]=useState({
         head:"Eyes Products",
         info:"We are a leading Manufacturer of Mascara, Eye Shadow and Eye Liner from New Delhi, India.",
         products:[
             {  
                 img:"https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-500x500.jpg",
                 head:"Mascara",
                 info:["Lash Defining, Waterproof, Conditioning, Creamy, Water proof, flake proof, Clamp proof formula.","Gives your eye lashes body and fullness.","With the tapered spiral brush the lashes can be easily separated."]

             },
             {
                 img:"https://3.imimg.com/data3/FX/IN/MY-3792183/eye-shadow-500x500.jpg",
                 head:"Eye Shadow",
                 info:["A fine powder with glitter in compressed form.",
                    "Enriched with oil absorbers.",
                    "UV-filters and moisturizer.",
                    "Gives a radiant glow on eyes.",
                    "Water proof and Stays on for hours."]

            },
            {
                 img:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/3/93c2d0dlak_8901030290190_h.jpg",
                 head:"Eye Liner",
                 info:["Creamy, Water proof, flake proof, Clamp proof formula.",
                    "Gives your eye lashes body and fullness.",
                    "With the tapered spiral brush the lashes can be easily separated.",
                    "Usage: Along the edge of the eyelids draw a line with the help of the flexible app."]

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