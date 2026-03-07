import './Results.styles.css';

export default function Results({total, correct}) {
  return (
<>
    <div className="results">
     <p>Your QUiZZy Results</p>

     <h3>Questions: {total}</h3>
     <h4>Correct: {correct}</h4>
     <h5>Wrong: {total - correct}</h5>

     <p className="percent">{((correct / total) * 100)}% Success</p>
    </div>
</>
  );
}