import React from 'react'
 import { Route,Routes } from 'react-router-dom';
 import Home from '../Pages/Admin/Home';


function AdminRouter() {
  return (
    <div>
        <Routes>
            <Route  path="/" element={<Home />}/>
              {/* <Route exact path="/login" element={<Login />}/>  
             <Route path="/editProduct" element={<EditProducts/>}/>   */}
        </Routes> 
    </div>
  );
}

export default AdminRouter;