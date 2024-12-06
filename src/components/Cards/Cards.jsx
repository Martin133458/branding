import React from 'react'
import s from "./Cards.module.scss"

const Cards = () => {
  return (
    <>
    <section className={s.cards1}>
        <h1>BROWSE BY dress STYLE</h1>
      <div className="container">
        
    <div className={s.cards}>
  <div className={s.card1}>Casual</div>
  <div className={s.card2}>Formal</div>
  <div className={s.card3}>Party</div>
  <div className={s.card4}>Gym</div>
  
</div>
      </div>
    </section>
    </>
  )
}

export default Cards