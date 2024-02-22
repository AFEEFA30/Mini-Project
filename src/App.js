import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import UserRouter from './Router/UserRouter';
import AdminRouter from './Router/AdminRouter';
import  LoginPage  from './Components/User/LoginPage/LoginPage';
  import SignupPage from './Components/User/SignUp/SignupPage';

function App() {
  return (
     <>
       <LoginPage/> 
      <SignupPage/>  
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

