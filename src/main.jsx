import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTaskOne from './Task 1/App.jsx';
import AppTaskTwo from './Task 2/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //Task One */}
    {/* <AppTaskOne /> */}

   {/* Task Two */}
   <AppTaskTwo />
 
  </StrictMode>
)
