import React from 'react'
import s from './Hero.module.scss'
const Hero = () => {
  return (
    <>
    <section className={s.hero}>
      <div className="container">
        <div className={s.wrapper}>
            <div className={s.box}>
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button>Shop Now</button>
             
            <div className={s.cards}>
               <div className={s.card}>
                   <h2>200+</h2>
                   <p>International Brands</p>
                </div> 
               <img src="/Line 9.png" alt="" />
                <div className={s.card}>
                <h2>2,000+</h2>
                <p>High-Quality Products</p>
                </div> 
               <img src="/Line 9.png" alt="" />
                <div className={s.card}>
                <h2>30,000+</h2>
                <p>Happy Customers</p>
                </div> 
            </div>
            </div>
            <img className={s.imghero} src="/hero-img.png" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero