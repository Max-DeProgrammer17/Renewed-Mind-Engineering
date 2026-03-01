import './Buttons.styles.css'

export default function Buttons({onCount, count}) {

    function increment(){
        onCount(count + 1);
    }

     function decrement(){
        onCount(count - 1);
    }

     function reset(){
        onCount(0);
    }
    
  return (
<>
    <div className="Buttons">
      <button className="decrement" onClick={decrement}>Decrement</button>
      <button className="reset" onClick={reset}>Reset</button>
      <button className="increment" onClick={increment}>Increment</button>
    </div>
</>
  );
}