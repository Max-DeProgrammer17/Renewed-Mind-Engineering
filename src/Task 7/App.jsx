import { useState } from 'react';
import './index.css';

export default function AppTaskSeven() {
    const [tasks, setTasks] =  useState([]);
    const [newTask, setNewTask] = useState('');

    function handleAdd(){
        if(newTask.trim()){
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function handleDelete(index){
      setTasks(tasks.filter((_,i) => i !== index));
    }
  return (
<>
    <div className="App">
       <input type="text" value={newTask} placeholder='Enter Your Task Here' onChange={(e)=>setNewTask(e.target.value)}/>


       <button onClick={handleAdd}>Add Task</button>

     <br />
 <ul>
       {tasks.map((task, i) => (
        <li key={i.toString()}>
            {task}

            <button onClick={() => handleDelete(i)} 
                style={{margin:"0px 4px", width:"30px", height:"30px", borderRadius:"50%"}}
                ><b>X</b></button>
        </li>
         
       ))}

</ul>

    </div> 
</>
  );
}