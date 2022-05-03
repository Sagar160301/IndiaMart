import { Producthead } from "./pagesHead";
import { Products } from "./products";
import { useState } from "react";
 export const Makeup=()=>{
     const [data,setData]=useState({
         head:"Makeup",
         info:"Offering you a complete choice of products which include Foundation, Compact, Pan Cake Foundation and Pan Stick Foundation.",
         products:[
             {  
                 img:"https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-500x500.jpg",
                 head:"Foundation",
                 info:["Easy spreading, water proof, Non oily formula.","Enriched with Vitamin-E and Aloe vera.","Improves natural skin texure.","Controls Sebum to give your facial skin a flawless matt finish all day long."]

             },
             {
                 img:"https://3.imimg.com/data3/YL/EJ/MY-3792183/01-500x500.jpg",
                 head:"Compact",
                 info:["Oil control, water proof formula","Matte velvet finish all day long.","Applies and blends easily on skin.","A fine powder enriched with oil absorbers,","UV-filters and moisturizer."]

            },
            {
                 img:"https://3.imimg.com/data3/VL/AM/MY-3792183/pan-cake-500x500.jpg",
                 head:"Pan Cake Foundation",
                 info:["A light scattering cake make up specialy made for face and body.","Proffesional make up foundation in stick form.","Used as a base to adhere other make up products.","With UV-absorbers."]

            },
           {
                img:"https://3.imimg.com/data3/LX/OI/MY-3792183/pan-stick-500x500.jpg",
                head:"Pan Stick Foundation",
                info:["Proffesional make up foundation in stick form.","Used as a base to adhere other make up products.","With UV-absorbers."]

           }
        ]
     })

     return <div>
         <Producthead productData={data}></Producthead>
         <Products products={data}></Products>
     </div>
 }