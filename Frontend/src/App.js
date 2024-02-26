import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import UserRouter from './Router/UserRouter';
import AdminRouter from './Router/AdminRouter';

function App() {
  return (
     <>
      <BrowserRouter>
         <Routes>
           <Route path='/*' element={<UserRouter/>}/>
           <Route path='/admin/*'element={<AdminRouter/>}/> 
         </Routes>
       </BrowserRouter> 
      </>
    );
  }
export default App;

