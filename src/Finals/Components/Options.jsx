import './Options.styles.css';

export default function Options({position, info, onValidate}) {

  const currentAnswer = info?.answers?.[position];
  return (
<>
    <div className="options">
      <ul>

        <br />
        <li onClick={() => onValidate(currentAnswer?.first)}>{currentAnswer?.first}</li><br />

        <li onClick={() => onValidate(currentAnswer?.second)}>{currentAnswer?.second}</li><br />

        <li onClick={() => onValidate(currentAnswer?.third)}>{currentAnswer?.third}</li><br />

        <li onClick={() => onValidate(currentAnswer?.fourth)}>{currentAnswer?.fourth}</li><br />
      </ul>
    </div>
</>
  );
}