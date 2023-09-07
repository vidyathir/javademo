import React, { Fragment } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './screens/Login';


import AddNewCustomer from './screens/AddNewCustomer';
import Progress from './screens/Progress';
import RLPLgenerated from './screens/RLPLgenerated';
import RLPLNotgenerated from './screens/RLPLNotgenerated';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import AnalystDashboaed from './screens/AnalystDashboaed';
import AwaitingSamples from './screens/AwaitingSamples';
import AnalystBatchandRLPLdetails from './screens/AnalystBatchandRLPLdetails';
import ReviewDashboard from './screens/ReviewDashboard';
import AwaitingSamplesReview from './screens/AwaitingSamplesReview';
import ReviewerDetails from './screens/ReviewerDetails';
import ApproverDashboard from './screens/ApproverDashboard';
import AwaitingSamplesApprover from './screens/AwaitingSamplesApprover';
import ApproverDetails from './screens/ApproverDetails';
import SearchCustomer from './screens/SearchCustomer';
import DITExpandedview from './screens/DITExpandedview';
import DITSuccess from './screens/DITSuccess';
import DitDashboard from './screens/DitDashboard';
import SroDashboard from './screens/SroDashboard';
import ViewCustomer from './screens/ViewCustomer';
import Print from './screens/Print'; 
import DITTDSExpandedview from './screens/DITTDSExpandedview';


export default function App() {
  return (
    <Fragment>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
  
     <Route exact path='/' element={<Login/>} />
     <Route exact path='/Print' element={<Print/>} />
     <Route exact path='/DITExpandedview' element={<DITExpandedview/>}/>
     <Route exact path ='/SroDashboard' element={<SroDashboard />} />
     <Route exact path ='/SearchCustomer/ViewCustomer' element={<ViewCustomer/>} />
     <Route exact path='/DitDashboard' element={<DitDashboard/>}/>  
     <Route exact path='/DitDashboard/DitExpandedView' element={<DITExpandedview/>}/>  
     <Route exact path='/DitDashboard/DitExpandedView/DITSuccess' element={<DITSuccess/>}/> 
     <Route exact path='/DitDashboard/DitExpandedView/DITSuccess/DITTDSExpandedview' element={<DITTDSExpandedview/>}/> 
     <Route exact path='/SearchCustomer' element={<SearchCustomer/>}/>    
     <Route exact path='/Progress' element={<Progress/>}/>  
     <Route exact path='/AddNewCustomer' element={<AddNewCustomer/>}/>
     <Route exact path='/Progress/RLPLgenerated' element={<RLPLgenerated/>}/>  
     <Route exact path='/Progress/RLPLNotgenerated' element={<RLPLNotgenerated/>}/>
     <Route exact path='/AnalystDashboaed' element={<AnalystDashboaed/>}/>  
     <Route exact path='/AnalystDashboaed/AwaitingSamples' element={<AwaitingSamples/>}/>  
     <Route exact path='/AnalystDashboaed/AwaitingSamples/AnalystBatchandRLPLdetails' element={<AnalystBatchandRLPLdetails/>}/>  
     <Route exact path='/ReviewDashboard' element={<ReviewDashboard/>}/>  
     <Route exact path='/ReviewDashboard/AwaitingSamplesReview' element={<AwaitingSamplesReview/>}/>  
     <Route exact path='/ReviewDashboard/AwaitingSamplesReview/ReviewerDetails' element={<ReviewerDetails/>}/>  
     <Route exact path='/ApproverDashboard' element={<ApproverDashboard/>}/>  
     <Route exact path='/ApproverDashboard/AwaitingSamplesApprover' element={<AwaitingSamplesApprover/>}/>  
     <Route exact path='/ApproverDashboard/AwaitingSamplesApprover/ApproverDetails' element={<ApproverDetails/>}/> 
    
     </Routes>
    </BrowserRouter>
    </Provider>
    </Fragment>
  )
}

