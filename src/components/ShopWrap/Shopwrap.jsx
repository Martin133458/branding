import React from 'react'
import s from "./Shopwrap.module.scss"




const Shopwrap = () => {
  return (
   <>
   <section className={s.shopwrap}>
      <div className="container">
         <div className={s.wrap}>
            <div className={s.card}>
               <h2>Casual</h2>
            </div>
            <div className={s.card}>
               <h2>Formal</h2>
            </div>
            <div className={s.card}>
               <h2>Party</h2>
            </div>
            <div className={s.card}>
               <h2>Gym</h2>
            </div>
         </div>
      </div>
   </section>
   <section className="basket">
      <div className="container">

      <h1 className={s.n}>You cart</h1>
      <div className={s.wrap1}>
         <div className={s.card1}>
            <img src="./sale-1.png" width={200}    alt="" />
            <div className={s.con}>

            <h1>Gradient Graphic T-shirt</h1>
            <p>Size: Large</p>
            <p>White</p>
            <h1>$145</h1>
            </div>
            <div className={s.wrap2}>
               <img src="" alt="" />
               <p>  -     1     +</p>
            </div>
         </div>
         <hr />
         <div className={s.card1}>
            <img src="./sale-2.png" width={200}    alt="" />
            <div className={s.con}>

            <h1>Gradient Graphic T-shirt</h1>
            <p>Size: Large</p>
            <p>Color: White</p>
            <h1>$145</h1>
            </div>
            <div className={s.wrap2}>
               <img src="" alt="" />
               <p>  -     1     +</p>
            </div>
         </div>
         <hr />
         <div className={s.card1}>
            <img src="./sale-3.png" width={200}    alt="" />
            <div className={s.con}>

            <h1>Gradient Graphic T-shirt</h1>
            <p>Size: Large</p>
            <p>White</p>
            <h1>$145</h1>
            </div>
            <div className={s.wrap2}>
               <img src="" alt="" />
               <p>  -     1     +</p>
            </div>
         </div>
      </div>
      </div>
   </section>
   <section className={s.reviews}>
      <div className="container">
        
         
         </div>
      
   </section>
   </>
  )
}

export default Shopwrap