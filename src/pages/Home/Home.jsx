import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Content from '../../components/Contents/Content'
import Category from '../../components/Category/Category'
import Card from '../../components/Card/Card'
import Cards from '../../components/Cards/Cards'


const Home = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <Content/>
   <Category/>
   <Cards/>
   </>
  )
}

export default Home