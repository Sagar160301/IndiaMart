import { Producthead } from "./pagesHead";
import { Products } from "./products";
import { useState } from "react";
 export const Lipstick=()=>{
     const [data,setData]=useState({
         head:"Lipstick",
         info:"Providing you the best range of Baked Brick Lipstick, Cerise Pink Lipstick, Coral Red Lipstick, Desert Rose Lipstick, Eternal Red Lipstick and Muddy Pink Lipstick with effective & timely delivery.",
         products:[
             {  
                 img:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
                 head:"Baked Brick Lipstick",
                

             },
             {
                 img:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
                 head:"Cerise Pink Lipstick",
                 

            },
            {
                 img:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
                 head:"Coral Red Lipstick"
                
                

            },
           {
                img:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
                head:"Desert Rose Lipstick",
              

           },
           {
            img:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
            head:"Eternal Red Lipstick",
          

       },
       {
        img:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
        head:"Muddy Pink Lipstick",
      

   },
   {
    img:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
    head:"Pretty Purple Lipstick",
  

},
{
    img:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
    head:"Radient Red Lipstick",
  

}
        ]
     })

     return <div>
         <Producthead productData={data}></Producthead>
         <Products products={data}></Products>
     </div>
 }