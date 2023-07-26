import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './screens/Login';

import AddNewCustomer from './screens/AddNewCustomer';
import CustomerDetailes from './screens/CustomerDetailes';
import SampleDetails from './screens/SampleDetails';
import Progress from './screens/Progress';
import BatchDetail  from './screens/BatchDetail';
import RLPLgenerated from './screens/RLPLgenerated';
import RLPLNotgenerated from './screens/RLPLNotgenerated';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
  
     <Route exact path='/' element={<Login/>} />
       <Route exact path='/AddNewCustomer' element={<AddNewCustomer/>}/>
     <Route exact path='/Progress' element={<Progress/>}/>  
     <Route exact path='/Progress/RLPLgenerated' element={<RLPLgenerated/>}/>  
     <Route exact path='/Progress/RLPLNotgenerated' element={<RLPLNotgenerated/>}/>   
     {/* <Route exact path='/CustomerDetailes' element={<CustomerDetailes/>}/>
    <Route exact path='/SampleDetails' element={<SampleDetails/>}/>
   <Route exact path='/BatchDetails' element={<BatchDetails/>}/>  */}
    </Routes>
    </BrowserRouter>
  )
}

