import React from 'react'
import s from "./Section.module.scss"

const Section = ({children, orient}) => {
  return (
    <>
     <h2 style={{textAlign: orient}} className={s.title}>{children}</h2>
    </>
  )
}

export default Section