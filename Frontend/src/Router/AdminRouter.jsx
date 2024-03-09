import React from 'react'
 import { Route,Routes } from 'react-router-dom';
  import Home from '../Pages/Admin/HomePage';
import UserDataPage from '../Pages/Admin/UserDataPage';
import CollectionListPage from '../Pages/Admin/CollectionListPage';



function AdminRouter() {
  return (
    <div>
        <Routes>
            <Route  path="/" element={<Home />}/>
           <Route path="/userdata" element={<UserDataPage/>}/>
           <Route path="/collectionlist" element={<CollectionListPage/>}/>  
            
            
              {/* <Route exact path="/login" element={<Login />}/>  
             <Route path="/editProduct" element={<EditProducts/>}/>   */}
        </Routes> 
    </div>
  );
}

export default AdminRouter;