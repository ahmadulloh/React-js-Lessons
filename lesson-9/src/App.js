import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';


function App() {
const [ num , setNum] = useState('')

const cvcRef = useRef(null)

const handleInput = (e) =>{
const val = e.target.value
setNum(val)
if(val.length == 16){
cvcRef.current.focus()
}
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <input type='number' onChange={handleInput}  className='' placeholder='Card number'  value={num}/>
       <input type="number"  className=' mt-2' placeholder='***' ref={cvcRef}/>
      </header>
    </div>
  );
}

export default App;
