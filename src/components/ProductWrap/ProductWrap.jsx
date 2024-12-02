import React from 'react'
import s from "./ProductWrap.module.scss"
import Products from "/public/products.json"
import Card from '../Card/Card'


const ProductWrap = ({product}) => {
  return (
   <>
   <section className={s.productwrap}>
      <div className="container">
         <div className={s.wrap}>
            <div className={s.images}>
               <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

               </div>
              <img src={product.image} alt="" />
            </div>
            <div className={s.box}>
               <div>
                  <h2>{product.name}</h2>
                  <h3>⭐⭐⭐⭐ 4.3/5</h3>
                  <div className={s.price}>
                     <b>{product.price} сум</b>
                     <s>{product.price * 1.2} сум</s>
                  </div>
                  <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
               </div>
               <div>
                  <p>Select colors</p>
                  <div className={s.colors}>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>

               </div>
                  <div>
                     <p>Choose Size</p>
                     <button>Small</button>
                     <button>Medium</button>
                     <button>Large</button>
                     <button>X-Large</button>

                  </div>
            </div>
         </div>
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
        
            <h1 className={s.h}>You might also like</h1>
         <div className={s.wrapper}>
            {Products.slice(4, 8).map(card => (

            <Card key={card.id} image={card.image} name={card.name} price={card.price}/>
            ))}
           
           
         </div>
      

            <div className={s.sud1}>
           
               <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
               <div>

               <input type="Email" placeholder='Enter your email address'/>
               <button>Subscribe to Newsletter</button>
               </div>
            </div>
         </div>
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
             
          
      
   </section>
   </>
  )
}

export default ProductWrap