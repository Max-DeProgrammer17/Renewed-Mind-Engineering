import './RButton.styles.css';

export default function RButton({onRestart}) {
  return (
<>
    <div className="rbutton">
      <button onClick={onRestart}>Restart Your QUiZZy Journey😊</button>
    </div>
</>
  );
}