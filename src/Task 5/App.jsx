import { useState } from 'react';
import './index.css';
import Buttons from './Components/Buttons';

export default function AppTaskFive() {
   const [count, setCount] = useState(0);


  return (
<>
    <div className="App">
      <h2>{count}</h2>
      

      <Buttons onCount={setCount} count={count}/>
    </div>
</>
  );
}