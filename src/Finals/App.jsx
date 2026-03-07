// import { useState } from 'react';
import { useState } from 'react';
import './App.styles.css';
import Buttons from './Components/Buttons';
import Header from './Components/Header';
import Options from './Components/Options';
import Question from './Components/Question';
import RButton from './Components/RButton';
import Results from './Components/Results';

export default function AppTaskTen() {
 const [index, setIndex] = useState(0);
 const [countCorrect, setCountCorrect] = useState(0);
 const [check, setCheck] = useState(null);

   const questAnswers = {
    questions:["What is the capital of Cameroon?", "What is the capital of France?"],
    answers:[{first:"Yaounde", second:"Buea", third:"Douala", fourth:"Kumba"}, {first:"Paris", second:"Nice", third:"stade", fourth:"skill"}]
   }

const correct = [questAnswers.answers[0].first, questAnswers.answers[1].first];

console.log(correct);

   function handleClick(){
    setIndex(index + 1);
   }

   function handleValidate(choice){
     if(choice == correct[index]){
        setCountCorrect(countCorrect + 1);   
     }
   }

   function handleRestart(){
    setIndex(0);
   }
    //  , "What is the capital of Canada?", "What is the capital of Ghana?"

   const total = questAnswers.questions.length;
   console.log(questAnswers.questions.length);
  return (
<>
    <div className="app_container">
 
     {(index < total) ?  
     <>
    <Header />
      <Question info={questAnswers} position={index} />
      <Options position={index} info={questAnswers} onValidate={handleValidate} check={check} setCheck={setCheck}/>
      <Buttons onClick={handleClick}/>
    </>
:
      <>
      <Results total={total} correct={countCorrect}/>
      <RButton onRestart={handleRestart}/>
      </>
      
   
       }
    </div>
</>
  );
}