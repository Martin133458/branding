import React from 'react'
import s from "./Category.module.scss"
import Section from '../SectionTitle/Section'
import Card from '../Card/Card'

import Products from "/public/products.json"
import { Link } from 'react-router-dom'

const Category = () => {
  return (
   <>
    <section className={s.category}>
      <div className="container">
         <Section orient="center">NEW ARRIVALS</Section>
       
         <div className={s.wrapper}>
            {Products.slice(0, 4).map(card => (
              <Link to={`/product/${card.id}`}>
            <Card key={card.id} image={card.image} name={card.name} price={card.price}/>
              </Link>

            ))}
           
           
         </div>
      </div>
    </section>
   </>
  )
}

export default Category