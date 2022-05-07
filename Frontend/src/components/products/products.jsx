import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../Redux/cart/action";
import { useSelector } from "react-redux";
import "./products.css";
import { useState,useEffect } from "react";
export const Products = ({ products, type }) => {
  const cart = useSelector((store) => store.cartReducer.cart);
  const token = useSelector((store) => store.cartReducer.token);
  const [carterr,setcarterr]=useState(false)
  const [cartform,setcartform]=useState({
    qty:0,
    price:"",
    brand:"",
    need:"",
    requirement:"",
    gst_number:"",
    productid:"",

  })
  const [showcart, setshowcart] = useState(false)
  const dispatch = useDispatch();
  const [addressform,setaddresform]=useState({})
  
  const handleinputcart=(e)=>{
    const { name, value } = e.target;

    setcartform({
      ...cartform,
      [name]: value,
    });

  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    cartform.productid=cart._id;
    for (const key in cartform) {
      if (cartform[key] === "" || cartform[key] === 0) {
        setcarterr(true);
        console.log(cartform)
        console.log("empty");
        return;
      }
    }
    
      let res = await fetch("http://localhost:9000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authorization":`Bearer ${token}`
        },
        body: JSON.stringify(cartform),
      });
      let data = await res.json();
      console.log(data);
      
      if (data.message) {
        setcarterr(true);
        return;
      } else {
        // document.cookie = `token=${data.token}`;
       
        setcarterr(false);
        setshowcart(false)
        return;
      }
    
    
  };

  useEffect(() => {
    console.log(token)
    if(token!=null){
      getdata();
    }
    console.log(addressform)
     
  
    
  }, [])
  async function getdata() {
  let res= await fetch("http://localhost:9000/users",{
    method: "GET",
    headers: {
      "content-type": "application/json",
      "authorization":`Bearer ${token}`
    },
   })
   let data=await res.json();
   setaddresform(data);
  }
  // console.log(products, type);
  
  return (
    <div className="allProductsDiv">
      {type !=="lipstick" ? (
        <div id="allproductsouterdiv">
        {products.map((e) => {
          return (
            <div className="singleProductDetails">
              <div className="singleProductDetailsLeftSideDiv">
                <div className="singleProductDetailsDiv">
                  <img className="singleProductDetailsImg" src={e.image} />
                </div>
                <p>Interested in this product?</p>
              </div>
              <div className="singleProductDetailsInfo">
                <h2 className="singleProductDetailsHead">{e.name}</h2>
                <h4 className="singleProductDetailsGetLatestPrice">
                  Get Latest Price
                </h4>
                <ul>
                  <li>Easy spreading, water proof, Non oily formula.</li>
                  <li>Enriched with Vitamin-E and Aloe vera.</li>
                  <li>Improves natural skin texure.</li>
                  <li>
                    Controls Sebum to give your facial skin a flawless matt
                    finish all day long.
                  </li>
                </ul>
                <div className="singleProductDetailsButtonDiv">
                  <button
                    className="singleProductDetailsButton"
                    onClick={() => {
                      dispatch(addCart(e));
                      setshowcart(true)
                      // navigate("/cartPage");
                    }}
                  >
                    Yes, I am interested!
                  </button>
                </div>
              </div>
              
            </div>
          );
        })}
        <div id="cartPage" style={{ display: showcart ? "flex" : "none" }}>
            <div className="card">
              <div id="left">
                <img src={cart.image} alt="" />
                <h1 className="formData">{cart.name}</h1>
                <p className="formData">{cart.benefits}</p>
                <div className="displayaddress">
                  <p>Address</p>
                  <p>{addressform.houseno} {addressform.city}{addressform.pincode} </p>
                  <p>{addressform.email}</p>
                  <p>{addressform.mobileno}</p>
                </div>
              </div>
              <div id="right">
                <form action="" onSubmit={handleSubmit}>
                  <h2 className="formData">
                    Adding a few details of your requirement can get you quick
                    response from the supplier
                  </h2>
                  <div className="qtydisplay">
                  <p className="formData">Quantity</p>
                  <div className="quant">
                    <input type="text" onChange={handleinputcart} name="qty"/>
                    <input type="text" placeholder="Piece" readOnly />
                  </div>
                  </div>
                  <p className="formData">Preferred Brand</p>
                  <input type="text" onChange={handleinputcart} name="brand"/>
                  <p className="formData">Total Order Value(Rs)</p>
                  <select name="price" id="" onChange={handleinputcart}>
                    <option value="">Select a Value</option>
                    <option value="upto1000">Upto 1000</option>
                    <option value="1000 to 2000">1000 to 2000</option>
                    <option value="100 to 500">100 to 500</option>
                    <option value="2000 to 3000">2000 to 3000</option>
                    <option value="3000 to 5000">3000 to 5000</option>
                  </select>

                  {/* <h3 className="formData">Almost done !</h3> */}
                  <p className="formData">Why do you need this</p>
                  <div id="radio">
                    <div>
                      <input type="radio" name="need" id="" onChange={handleinputcart} />
                      <span>For Reselling</span>
                    </div>
                    <div>
                      <input type="radio" name="need" id="" onChange={handleinputcart} />
                      <span>For Business Use</span>
                    </div>
                    <div>
                      <input type="radio" name="need" id=""  onChange={handleinputcart}/>
                      <span>For Home Use</span>
                    </div>
                  </div>
                  <p>Requirement Details</p>
                  <input
                    type="text"
                    placeholder="Additional details about your requirement"
                    name="requirement"
                    onChange={handleinputcart}
                  />
                  <p>GST Number</p>
                  <input type="text"
                   placeholder="enter the gst number" 
                   name="gst_number"
                   onChange={handleinputcart}/>
                   <span>{carterr}</span>
                  <input type="submit" id="submit" value="Submit" />
                </form>
                {/* <p>Your contact Information { }</p> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="LipstickOuterdiv">
          {products.map((e) => {
            return (
              <div className="ListickDiv">
                <h2 className="singleProductDetailsHeadL">{e.name}</h2>
                <div className="LipsticImgDiv">
                  <img src={e.image} />
                </div>
                <h4 className="singleProductDetailsGetLatestPriceL">
                  Get Latest Price
                </h4>
                <button
                  className="singleProductDetailsButton"
                  onClick={() => {
                    dispatch(addCart(e));
                    setshowcart(true)
                    // navigate("/cartPage");
                  }}
                >
                  Ask for Details
                </button>
              </div>
            );
          })}
          <div id="cartPage" style={{ display: showcart ? "flex" : "none" }}>
            <div className="card">
              <div id="left">
                <img src={cart.image} alt="" />
                <h1 className="formData">{cart.name}</h1>
                <p className="formData">{cart.benefits}</p>
                <div className="displayaddress">
                  <p>Address</p>
                  <p>{addressform.houseno} {addressform.city}{addressform.pincode} </p>
                  <p>{addressform.email}</p>
                  <p>{addressform.mobileno}</p>
                </div>
              </div>
              <div id="right">
                <form action="" onSubmit={handleSubmit}>
                  <h2 className="formData">
                    Adding a few details of your requirement can get you quick
                    response from the supplier
                  </h2>
                  <div className="qtydisplay">
                    <div>
                    <p className="formData" id="formData">Quantity</p>
                    </div>
                  
                  <div className="quant">
                    <input type="text" onChange={handleinputcart} name="qty"/>
                    <input type="text" placeholder="Piece" readOnly />
                  </div>
                  </div>
                  <p className="formData">Preferred Brand</p>
                  <input type="text" onChange={handleinputcart} name="brand"/>

                  <p className="formData">Total Order Value(Rs)</p>
                  <select name="price" id="" onChange={handleinputcart}>
                    <option value="">Select a Value</option>
                    <option value="Upto 1000">Upto 1000</option>
                    <option value="1000 to 2000">1000 to 2000</option>
                    <option value="100 to 500">100 to 500</option>
                    <option value="2000 to 3000">2000 to 3000</option>
                    <option value="3000 to 5000">3000 to 5000</option>
                  </select>

                  {/* <h3 className="formData">Almost done !</h3> */}
                  <p className="formData">Why do you need this</p>
                  <div id="radio">
                    <div>
                      <input type="radio" name="need" id="" onChange={handleinputcart}/>
                      <span>For Reselling</span>
                    </div>
                    <div>
                      <input type="radio" name="need" id="" onChange={handleinputcart} />
                      <span>For Business Use</span>
                    </div>
                    <div>
                      <input type="radio" name="need" id="" onChange={handleinputcart}/>
                      <span>For Home Use</span>
                    </div>
                  </div>
                  <p>Requirement Details</p>
                  <input
                    type="text"
                    placeholder="Additional details about your requirement"
                    name="requirement"
                    onChange={handleinputcart}
                  />
                  <p>GST Number</p>
                  <input type="text" placeholder="enter the gst number" onChange={handleinputcart}
                  name="gst_number"
                   />
                   <span>{carterr}</span>
                  <input type="submit" id="submit" value="Submit" />
                </form>
                {/* <p>Your contact Information { }</p> */}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
