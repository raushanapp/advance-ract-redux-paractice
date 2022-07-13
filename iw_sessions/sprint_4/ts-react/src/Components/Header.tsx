import React from 'react'
interface Headerprops {
    label?:string,
    children?:JSX.Element | JSX.Element[]
}
function Header({label="Counter",children}:Headerprops) {
    // console.log(children)
  return (
    <>
     <h1>{label}</h1>
     {children}
    </>
  )
}

export default Header