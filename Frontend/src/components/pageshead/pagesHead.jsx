import "./pagesHead.css"

export const Producthead=({productData})=>{
    return <div className="pageMainDiv">
        <h2 className="pageHead">{productData.head}</h2>
        <h5 className="pageInfo">{productData.info}</h5>
         <div className="productDataDiv">
             {productData.products.map((e)=>{
                 return <div className="singleProductDiv">
                     <img className="singleProductImg" src={e.img}/>
                     <p className="singleProductHead">{e.head}</p>
                     <p className="singleProductAskPrice">Ask Price</p>
                 </div>
             })}
         </div>
    </div>
}