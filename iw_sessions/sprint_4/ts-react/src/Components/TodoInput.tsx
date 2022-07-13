import React, { useState } from 'react'
interface TodoInputProps {
    onClick :(value:string)=> void
}
function TodoInput({onClick}:TodoInputProps) {
    const [text,setText] = useState<string>("")
    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setText(e.target.value)
    }
    const handleAdd:React.MouseEventHandler<HTMLButtonElement>=()=>{
        onClick(text)
    }
  return (
    <div>
       <input type="text" value={text} onChange={handleChange} />
       <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput