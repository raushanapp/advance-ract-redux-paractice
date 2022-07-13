import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

function Counter() {
    const [count,seCount] =useState(0);
    const handleClick=(value:number)=>{
        seCount(count + value)
    }
  return (
    <div>
       {/* <Header>
         <div>Childer counter div</div>
         <div>Childer counter div</div>
         <div>Childer counter div</div>
         <div>Childer counter div</div>
       </Header> */}
        <Header label={`${count}`}/>
        <Button label="Add" handleClick={()=> handleClick(1)}/>
        <Button label="Reduce" handleClick={()=> handleClick(-1)}/>
        
    </div>
  )
}

export default Counter