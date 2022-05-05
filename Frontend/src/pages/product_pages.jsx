import { Producthead } from "../components/pageshead/pagesHead";
import { Products } from "../components/products/products";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/pages_sidebar/pages_sidebar";
import "./product_pages.css"
export const Product_pages=({type})=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
      let res=await fetch("")
      let FetchedData=await res.json()
      setData(FetchedData)
    }
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