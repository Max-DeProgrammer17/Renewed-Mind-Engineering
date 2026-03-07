import './Question.styles.css';

export default function Question({info, position}) {
  
  return (
<>
    <div className="Question">
      <p>{info.questions[position]}</p>
    </div>
</>
  );
}