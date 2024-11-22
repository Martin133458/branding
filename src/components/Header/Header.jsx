import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
   <>
   <header className={s.header}>
    <div className="container">
        <nav className={s.nav}>
          <img className={s.burger} src="/Frame (1).svg" alt="" />
           <Link to={'/'} className={s.logo}>SHOP.CO</Link>
           <div className={s.menu}>
            <Link to={'/'}>Shop</Link>
            <Link to={'/'}>On Sale</Link>
            <Link to={'/'}>New Arrivals</Link>
            <Link to={'/'}></Link>

           </div>
           <input className={s.search} type="text" />

           <div className={s.box}>
              <img src="/Frame.svg" alt="" />
              <img src="/Vector (4).svg" alt="" />
            
           </div>
        </nav>
    </div>
   </header>
   </>
  )
}

export default Header