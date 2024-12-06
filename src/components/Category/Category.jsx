import React, { useState } from 'react'
import s from "./Category.module.scss"
import Section from '../SectionTitle/Section'
import Card from '../Card/Card'

import Products from "/public/products.json"
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context'

const Category = () => {

   const { visibleProducts,  loadMoreProducts } = useAppContext()

  
  return (
   <>
    <section className={s.category}>
      <div className="container">
         <Section orient="center">NEW ARRIVALS</Section>
       
         <div className={s.wrapper}>
            {Products.slice(0, visibleProducts).map(card => (
              <Link to={`/product/${card.id}`}>
            <Card key={card.id} image={card.image} name={card.name} price={card.price}/>
              </Link>

            ))}
           
           
         </div>

         {visibleProducts  < Products.length && (
            <div className={s.loadMore}>
            <button onClick={loadMoreProducts} className={s.loadMoreProducts}>
            Еще
            </button>
            </div>
         )}
    <div className={s.sud1}>
           
               <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
               <div>

               <input type="Email" placeholder='Enter your email address'/>
               <button>Subscribe to Newsletter</button>
               </div>
            </div>
      </div>
    </section>

         
            <footer className={s.footer}>
               <div className="container">
                  <div className={s.con}>
                     
               <div className={s.content1}>

               <h1>SHOP.CO</h1>
               <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
               <img src="/1.svg" alt="" />
               <img src="/2.svg" alt="" />
               <img src="/3.svg" alt="" />
               <img src="/4.svg" alt="" />
               </div>
               <div className={s.end}>
                  <div className={s.end1}>
                     <h1>Company</h1>
                     <p>About</p>
                     <p>Features</p>
                     <p>Works</p>
                     <p>Career</p>
                  </div>
                  <div className={s.end1}>
                     <h1>Help</h1>
                     <p>Customer Support</p>
                     <p>Delivery Details</p>
                     <p>Terms & Conditions</p>
                     <p>Privacy Policy</p>
                  </div>
                  <div className={s.end1}>
                     <h1>FAQ</h1>
                     <p>Account</p>
                     <p>Manage Deliveries</p>
                     <p>Orders</p>
                     <p>Payments</p>
                  </div>
                  <div className={s.end1}>
                     <h1>Resources</h1>
                     <p>Free eBooks</p>
                     <p>Development Tutorial</p>
                     <p>How to - Blog</p>
                     <p>Youtube Playlist</p>
                  </div>
               </div>

               </div>
               <hr />
               <div className={s.card}>

               <p>Shop.co © 2000-2023, All Rights Reserved</p>
               <div className={s.creditcard}>
                  <img src="/Badge (1).png" alt="" />
                  <img src="/Badge (2).png" alt="" />
                  <img src="/Badge (3).png" alt="" />
                  <img src="/Badge (4).png" alt="" />
               </div>
               </div>
                  </div>
            </footer>
   </>
  )
}

export default Category