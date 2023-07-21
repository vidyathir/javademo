import React, { useState } from "react";
import CustomerDetailes from "./CustomerDetailes";
import SampleDetails from "./SampleDetails";
import BatchDetails from "./BatchDetails";
import MultiStepProgressBar from "../components/MultiStepProgressBar";
import BootStrap from './BootStrap'
import TypeOfAnalysis from "./TypeOfAnalysis";
import Sidenavbar from "../components/Sidenavbar";
import Titlebar from "../components/Titlebar";
import './Styles.css';
import ItemList from "./ItemList";


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
          setPage("ItemList");
          break;
          case "4":
          setPage("TypeOfAnalysis");
          break;
         case "5":
          alert("Ooops! Seems like you did not fill the form.");
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
        
      

        <div style={{marginTop:50,marginBottom:50}}>
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
        </div>
        {
          {
            CustomerDetailes: <CustomerDetailes onButtonClick={nextPage} />,
            SampleDetails: <SampleDetails onButtonClick={nextPage} />,
            ItemList: <ItemList onButtonClick={nextPage} />,
            TypeOfAnalysis: <TypeOfAnalysis onButtonClick={nextPage} />,
            BootStrap: <BootStrap />,
          }[page]
        }
       
       </div> 
      </div>
      </div>
      
    
    );
  }
  
  export default Progress;
  