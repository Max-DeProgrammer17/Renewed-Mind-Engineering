import { useState } from 'react';
import './index.css';

export default function AppTaskSix() {
  const [names, setNames] = useState('');
  const [displayName, setDN] = useState('')
  const [email, setEmail] = useState('');
  const [displayEmail, setDE] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    console.log(names, email);

 setNames(' ');
    setEmail(' ');
    setDN(names);
    setDE(email);

   

  }

  return (
<>
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="names">Name</label><br />
        <input type="text" id='names' value={names} onChange={(e)=>setNames(e.target.value)}/><br /><br />

        <label htmlFor="email">Email</label><br />
        <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<br /><br />
        <div className='btn'>
            <button >Submit/Display</button>
        </div>
      </form>
 <br /><br />

  {(displayName && displayEmail) && 
  
  <div className="display">
      <h3>Your Infromation</h3><br />

    <p>Name: {displayName}</p>
    <p>Email: {displayEmail}</p>

   </div>
   
   }
   
    

    </div>

   
</>
  );
}