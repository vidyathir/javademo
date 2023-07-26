import React, { useState } from "react";
import CustomerDetailes from "./CustomerDetailes";
import SampleDetails from "./SampleDetails";
import BatchDetail from "./BatchDetail";
import MultiStepProgressBar from "../components/MultiStepProgressBar";
import TypeOfAnalysis from "./TypeOfAnalysis";
import Sidenavbar from "../components/Sidenavbar";
import Titlebar from "../components/Titlebar";
import ConfirmDetails from "./ConfirmDetails";
import SampleVerification from "./SampleVerification";
import './Styles.css';


function Progress() {
    const [page, setPage] = useState("CustomerDetailes");
  
    const nextPage = (page) => {
      setPage(page);
    };
  
    const nextPageNumber = (pageNumber) => {
      switch (pageNumber) {
        case "1":
          setPage("CustomerDetailes");
          break;
        case "2":
          setPage("SampleDetails");
          break;
        case "3":
          setPage("BatchDetail");
          break;
          case "4":
          setPage("TypeOfAnalysis");
          break;
         case "5":
          setPage("ConfirmDetails");
          break;
          case "6":
          setPage("SampleVerification");
          break;
        
        default:
          setPage("1");
      }
    };
  
    return (
      
         <div className="app">
      <Sidenavbar />
      <div className="main">
        <div className="mainitem">
          <Titlebar />
        
      

        <div style={{marginTop:50,marginBottom:70}}>
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
        </div>
        {
          {
            CustomerDetailes: <CustomerDetailes onButtonClick={nextPage} />,
            SampleDetails: <SampleDetails onButtonClick={nextPage} />,
            BatchDetail: <BatchDetail onButtonClick={nextPage} />,
            TypeOfAnalysis: <TypeOfAnalysis onButtonClick={nextPage} />,
            ConfirmDetails:<ConfirmDetails onButtonClick={nextPage}/>,
            SampleVerification:<SampleVerification onButtonClick={nextPage}/>
        
      
          }[page]
        }
       
       </div> 
      </div>
      </div>
      
    
    );
  }
  
  export default Progress;
  