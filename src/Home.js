import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className='home'>
         <div className="home__container">
             <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        <div className="home__row">
        <Product id={123} title='The lean startup: How Constant Innovation Creates Radically Successful Businesses PaperBakc' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}/>
        <Product id={124} title="Crocs Men's and Women's Classic Clog" price={49.99} rating={4} image="https://m.media-amazon.com/images/I/618UAoZPlNL._AC_UY500_.jpg"/>
        </div>

        <div className="home__row">
        <Product id={125} title='Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR ' price={29.99} image="https://m.media-amazon.com/images/I/81mkzEPtKZL._AC_SY355_.jpg" rating={5}/>
        <Product id={126} title='THERMOS FUNTAINER 12 Ounce Stainless Steel Vacuum Insulated Kids Straw Bottle, Blue' price={11.99} image="https://m.media-amazon.com/images/I/71U0kxMAOMS._AC_SY450_.jpg" rating={5}/>
        <Product id={127} title='Amazon.com eGift Card' price={49.99} image="https://images-na.ssl-images-amazon.com/images/I/41HIBCiSxzL._AC_UL200_SR200,200_.jpg" rating={5}/>
        
        </div>

        <div className="home__row">
        <Product id={128} title='TCL 40-inch 1080p Smart LED Roku TV - 40S325, 2019 Model' price={258.99} image="https://images-na.ssl-images-amazon.com/images/I/71MVe3Ym8yL._AC_UL200_SR200,200_.jpg" rating={5}/>
        </div>


         </div>

        </div>
            
        
    )
}

export default Home
