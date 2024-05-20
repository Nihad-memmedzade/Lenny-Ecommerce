import React from 'react'
import style from "..//../components/buttons/button.module.scss"

function Button({cStyle,text,fn}) {
  return (
  <button  onClick={fn} className={`${style.btn} ${cStyle} `}>
{text}</button>
  )
}

export default Button