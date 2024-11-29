import React from 'react'
import s from "./Shopwrap.module.scss"

import Products from "/public/products.json"
import Card from '../Card/Card'

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
   <section className={s.reviews}>
      <div className="container">
         <div className={s.content}>
            <h1>All Reviews (461)</h1>
           
            <div className={s.c}>
               <img src="" alt="" />
               <button>Latest 
               <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5306 6.53063L8.53063 11.5306C8.46095 11.6005 8.37816 11.656 8.28699 11.6939C8.19583 11.7317 8.09809 11.7512 7.99938 11.7512C7.90067 11.7512 7.80293 11.7317 7.71176 11.6939C7.6206 11.656 7.53781 11.6005 7.46813 11.5306L2.46813 6.53063C2.32723 6.38973 2.24808 6.19864 2.24808 5.99938C2.24808 5.80012 2.32723 5.60902 2.46813 5.46813C2.60902 5.32723 2.80012 5.24808 2.99938 5.24808C3.19864 5.24808 3.38973 5.32723 3.53063 5.46813L8 9.9375L12.4694 5.4675C12.6103 5.32661 12.8014 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5319 5.4675C13.6728 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6728 6.38911 13.5319 6.53L13.5306 6.53063Z"
                    fill="black"
                  />
                </svg> </button>
               <button className={s.b}>Write a Review</button>
            </div>
         </div>
            <h1 className={s.h}>You might also like</h1>
         <div className={s.comments}>
            <div className={s.comment1}>
               <img src="/Frame 10.png" alt="" />
               <h1>Samantha D. <img src="/Vector (1).png" alt="" /></h1>
               <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            </div>
            <div className={s.comment1}>
               <img src="/Frame 10.png" alt="" />
               <h1>Alex M. <img src="/Vector (1).png" alt="" /></h1>
               <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
            </div>
            <div className={s.comment1}>
               <img src="/Frame 10.png" alt="" />
               <h1>Ethan R.     <img src="/Vector (1).png" alt="" /></h1>
               <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
            </div>
            <div className={s.comment1}>
               <img src="/Frame 10.png" alt="" />
               <h1>Olivia P.     <img src="/Vector (1).png" alt="" /></h1>
               <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
            </div>
         </div>
        
         <div className={s.wrapper}>
            {Products.slice(4, 8).map(card => (

            <Card key={card.id} image={card.image} name={card.name} price={card.price}/>
            ))}
           
           
         </div>
         </div>
      
   </section>
   </>
  )
}

export default Shopwrap