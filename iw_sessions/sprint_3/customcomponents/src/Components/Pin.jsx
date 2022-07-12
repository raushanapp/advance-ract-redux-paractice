import React, { useState } from 'react'
import PropTypes from "prop-types"
import { useRef } from 'react'
import { PinItem } from './PinItem'

export const Pin=({length,onChange}) =>{
  const inputRef = useRef([])
  const [inputBoxLength] = useState(new Array(length).fill(0));
  const [inputVlaue,setInputValue] = useState(new Array(length).fill(""))
  const handleChange=(e,index)=>{
    inputVlaue[index]=e.target.value;
    setInputValue(inputVlaue)
    if(index<length-1) {
      inputRef.current[index+1].focus()
    }
    
  }
  const [value,setVaule] = useState([])
  console.log(inputVlaue)
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      {inputBoxLength.fill(1).map((ele,index)=>(
       
        <PinItem key={index} onChange={(e)=>handleChange(e,index)}
          ref={(element)=>inputRef.current[index]=element}
        />
      ))}
    </div>
  )
}
Pin.propTypes ={
  length:PropTypes.number.isRequired,
  onChange:PropTypes.func
}
// export default Pin