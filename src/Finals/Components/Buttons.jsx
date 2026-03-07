import './Buttons.styles.css';

export default function Buttons({onClick}) {
  return (
<>
    <div className="buttons">
      <button onClick={onClick}>Next Question</button>
    </div>
</>
  );
}