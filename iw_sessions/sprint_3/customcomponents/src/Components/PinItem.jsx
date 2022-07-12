import React,{forwardRef} from 'react'

export const  PinItem = forwardRef(({onChange},ref) =>{
  return (
    <div>
        <input 
         maxLength={1}
         ref={ref}
         onChange={onChange}
        />
    </div>
  );
});

