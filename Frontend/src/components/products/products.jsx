import "./products.css"
export const Products=({products})=>{
    
    return <div className="allProductsDiv">
        {products.head!=="Lipstick" ?
        products.products.map((e)=>{
            return <div className="singleProductDetails">
                <div className="singleProductDetailsLeftSideDiv">
                <div className="singleProductDetailsDiv">
                <img className="singleProductDetailsImg" src={e.img}/>
                </div>
                <p>Interested in this product?</p>
                </div>
                <div className="singleProductDetailsInfo">
                    <h2 className="singleProductDetailsHead">{e.head}</h2>
                    <h4 className="singleProductDetailsGetLatestPrice">Get Latest Price</h4>
                    <ul>
                  {e.info.map((el)=>{
                      return <li className="ulList">{el}</li>
                  })}
                  </ul>
                  <div className="singleProductDetailsButtonDiv">
                 <button className="singleProductDetailsButton">Yes, I am interested!</button>
                  </div>
                </div>
            </div>
        }): <div className="LipstickOuterdiv">{products.products.map((e)=>{
            return <div className="ListickDiv">
                   <h2 className="singleProductDetailsHead">{e.head}</h2>
                   <div className="LipsticImgDiv">
                   <img src={e.img}/>
                   </div>
                   <h4 className="singleProductDetailsGetLatestPrice">Get Latest Price</h4>
                   <button className="singleProductDetailsButton">Ask for Details</button>
            </div>
        })}
        </div>
}
    </div>
}