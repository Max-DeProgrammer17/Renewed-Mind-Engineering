import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTaskOne from './Task 1/App.jsx';
import AppTaskTwo from './Task 2/App.jsx';
import AppTaskThree from './Task 3/App.jsx'
import AppTaskFour from './Task 4/App.jsx';
import AppTaskFive from './Task 5/App.jsx';
import AppTaskSix from './Task 6/App.jsx';
import AppTaskSeven from './Task 7/App.jsx';
import AppTaskEight from './Task 8/App.jsx';
import AppTaskNine from './Task 9/App.jsx';
import AppTaskTen from './Finals/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //Task One */}
    {/* <AppTaskOne /> */}

   {/* Task Two */}
   {/* <AppTaskTwo /> */}

   {/* //Task Three */}
   {/* <AppTaskThree /> */}

   {/* Task Four */}
   {/* <AppTaskFour /> */}

   {/* Task Five */}
   {/* <AppTaskFive /> */}

   {/* Task Six */}
   {/* <AppTaskSix /> */}

   {/* Task Seven */}
  {/* <AppTaskSeven /> */}

  {/* Task Eight */}
  {/* <AppTaskEight /> */}


  {/* Task Nine */}
  {/* <AppTaskNine /> */}

  {/* Task Ten */}
  <AppTaskTen />

  </StrictMode>
)
