import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal";
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/sns/ILM/XCM_Manual_1344152_1757214_US_us_pc_ilm_2x_us_en_3937419_650x45_1X_en_US._CB665623586_.jpg"/>
            <div >
                <h2 className="checkout__title">Your shopping Basket</h2>
            </div>
            </div>
            <div className="checkout__right"> 
            <Subtotal />
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
