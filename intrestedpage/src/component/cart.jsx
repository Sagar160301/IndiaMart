import { useState } from "react"
import "./cart.css"

export const Card = ({ data,user }) => {
    const [proData, setProData] = useState([])
    const [show, setShow] = useState()
    const [show1, setshow1] = useState("")
    return (<div>
        {data.map((e) => (
            <div className='card' key={e.id}>
                <img src={e.image} />

                <button onClick={() => {
                    setProData(e)
                    setShow(true)
                    setshow1("con1")
                }}>inrested</button>

            </div>
        ))}


        {show ? <div className='card2'>
            <div className='card1'>
                {show1 != "con4" ? <div className='imgcon'>
                    <div className='imgdiv'><img src={proData.image} /></div>
                    <p className='imgname'>{proData.name}</p>
                    <p className="sold"> <span>Sold By-</span>{proData.p3}</p>
                </div> : null}
                <div className='cartcon'>
                    <div className="cross">
                        <div id="t0901_cls" className="be-cls" onClick={() => {
                            setShow(false)
                        }}>
                        </div>

                        {(() => {
                            if (show1 == "con1") {
                                return <div className='cartdetail'>
                                    <p className='head'>Adding a few details of your requirement can get you quick response from the supplier</p>
                                    <p>Quantity</p>
                                    <div className='inputcon'><input className='number' type="number" />
                                        <input type="text" /></div>

                                    <p>Preferred Brand</p>
                                    <div className=' inputcon'>
                                        <input className='brand' type="text" /></div>

                                    <p>Total Order Value(Rs)</p>
                                    <div className='inputcon'>
                                        <select className="select"><option value="">Select a Value</option><option value="Upto 1,000" optionid="1842517">Upto 1,000</option><option value="1,000 to 3,000" optionid="1842518">1,000 to 3,000</option><option value="3,000 to 10,000" optionid="1842519">3,000 to 10,000</option><option value="10,000 to 20,000" optionid="1842520">10,000 to 20,000</option><option value="20,000 to 50,000" optionid="1842521">20,000 to 50,000</option><option value="50,000 to 1 Lakh" optionid="1842522">50,000 to 1 Lakh</option><option value="1 to 2 Lakh" optionid="1842523">1 to 2 Lakh</option><option value="2 to 5 Lakh" optionid="1842524">2 to 5 Lakh</option><option value="5 to 10 Lakh" optionid="1842525">5 to 10 Lakh</option><option value="10 to 20 Lakh" optionid="1842526">10 to 20 Lakh</option><option value="20 to 50 Lakh" optionid="1842527">20 to 50 Lakh</option><option value="50 Lakh to 1 Crore" optionid="1842528">50 Lakh to 1 Crore</option><option value="More than 1 Crore" optionid="1842529">More than 1 Crore</option></select>

                                    </div>
                                    <div className='buttondiv'><button onClick={() => {
                                        setshow1("con2")
                                        // setShow(false)
                                    }}>Next</button></div>
                             
                                </div>
                                
                            }
                            else if (show1 == "con2") {

                                return <div className='cartdetail'>
                                    <p className='head'>Almost Done</p>
                                    <p>Why do you need this</p>

                                    <div className="radiocon selling">
                                        <div className="radioInput">
                                            <input type="radio" className="inputradio" name="radiocheck" id="option1" value="For Reselling" /><div><span>For Selling</span></div>


                                        </div>
                                        <div className="radioInput business">
                                            <input type="radio" className="inputradio" name="radiocheck" id="option2" value="" /><div><span>For Business Use</span></div>
                                        </div>
                                        <div className="radioInput home">
                                            <input type="radio" className="inputradio" name="radiocheck" id="option3" value="" /><div><span>For Home Use</span></div>
                                        </div>
                                    </div>

                                    <p>Requirement Details</p>
                                    <div className="txtarea">
                                        <div><textarea id="t0901_reqBoxTemplates" placeholder="Additional details about your requirement..."></textarea></div>
                                        <div className="nextback">
                                            <div className='backbtn' onClick={() => {
                                                setshow1("con1")
                                            }}>
                                                <img className='backimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYavmAW5K6mR5VXOepK6EhMaQY3OU0ZfLXw&usqp=CAU" alt="sdfd" />
                                            </div>
                                            <div className='showbtn buttondiv buttondiv1'><button onClick={() => {
                                                setshow1("con3")
                                            }}>Next</button></div>

                                        </div>
                                    </div>

                                </div>
                            }
                            else if (show1 == "con3") {
                                return <div className='cartdetail con3'>
                                    <p className='head'>Please provide a few details to get quick response from the supplier</p>
                                    <form className='form'>
                                        <div className='input_group'>
                                            <input className="input" type="text" />
                                            <label className='placeholder'>Company/Business Name</label>
                                        </div>
                                    </form>

                                    <form className='form'>
                                        <div className='input_group'>
                                            <input className="input" type="text" />
                                            <label className='placeholder placeholder1'>GST Number</label>
                                        </div>
                                    </form>
                                    <div className='buttondiv submit'><button onClick={() => {
                                        setshow1("con4")
                                    }}>Submit</button></div>

                                </div>
                            }

                            else if (show1 == "con4") {
                                return <div className='last full'>
                                    <div className='thankyou'>
                                        <i className="cHkIcon"></i> <span >Thank you</span>
                                    </div>
                                    <div ><p className="message">Your requirement has been sent to Blue Heaven Cosmetics (P) Ltd
                                        Verify your email p******@gmail.com as suppliers are more likely to contact verified buyers.</p></div>
                                    <hr />
                                    <div className='paymentcon'>
                                        <div className='messagcon paymentcon1'>
                                            <p>To check further replies from the
                                                supplier :</p>
                                            <div className='buttondiv messagebtn'>

                                                <button onClick={() => {

                                                }}><span>View messages</span></button></div>
                                        </div>
                                        <div className='payment paymentcon1 '>
                                            <p>Protect your payments for FREE, Pay
                                                sellers online via Pay with IndiaMART
                                            </p>

                                            <div><span className="BL_Ficn1"></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            }
                        })()}
{/* add contact detail */}
   {(()=>{
     if(show1!="con4"){
         return user.map((e)=>(
            <div className="address">
       
                 <p>Your Contact Information :</p>
                 {/* user name */}
                 <p>{e.name}</p>
                 <p>+{e.phone} | <span>{e.email}</span> </p>
       
              </div>
            ))
     }
   })()} 
                    </div>
              
                </div>
            </div>
        </div> : null}

    </div>)
}

