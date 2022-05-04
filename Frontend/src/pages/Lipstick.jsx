import { Producthead } from "../components/pageshead/pagesHead";
import { Products } from "../components/products/products";
import { useState } from "react";
import { Sidebar } from "../components/pages_sidebar/pages_sidebar";
import "./product pages style/product_pages.css"

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