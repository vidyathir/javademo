import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './screens/Login';

import AddNewCustomer from './screens/AddNewCustomer';
import CustomerDetailes from './screens/CustomerDetailes';
import SampleDetails from './screens/SampleDetails';
import Progress from './screens/Progress';
import RLPLgenerated from './screens/RLPLgenerated';
import RLPLNotgenerated from './screens/RLPLNotgenerated';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { Fragment } from 'react';


export default function App() {
  return (
    <Fragment>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
  
     <Route exact path='/' element={<Login/>} />
        
     <Route exact path='/Progress' element={<Progress/>}/>  
     <Route exact path='/Progress/AddNewCustomer' element={<AddNewCustomer/>}/>
     <Route exact path='/Progress/RLPLgenerated' element={<RLPLgenerated/>}/>  
     <Route exact path='/Progress/RLPLNotgenerated' element={<RLPLNotgenerated/>}/> 
     {/* <Route exact path='/CustomerDetailes' element={<CustomerDetailes/>}/>
    <Route exact path='/SampleDetails' element={<SampleDetails/>}/>
   <Route exact path='/BatchDetails' element={<BatchDetails/>}/>  */}
    </Routes>
    </BrowserRouter>
    </Provider>
    </Fragment>
  )
}

