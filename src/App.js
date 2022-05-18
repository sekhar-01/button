
import './App.css';
import { useState } from 'react';


function App(){
const [count,setcount]=useState(0)
    return(
      <div>
      <p>You clicked {count} times</p>
      <h1>hello</h1>
      <button onClick={()=>setcount(count+1)}>Click</button>
      </div>
    );
  
}

export default App;

