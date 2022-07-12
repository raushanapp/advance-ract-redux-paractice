
import { useState } from 'react';
import './App.css';
import {Pin} from './Components/Pin';

function App() {
  const [otp,setOtp] = useState("")
  return (
    <div className="App">
       <Pin length={5} 
        onChange={(value)=>{setOtp(value)}}
       />
      <h2>The value of Otp is {otp}</h2>

    </div>
  );
}

export default App;
// const PinWrapper =styled.div`
//   width: 2px;
//   padding:10px;
//   /* margin:5px; */
//   /* align-items:center; */
// `