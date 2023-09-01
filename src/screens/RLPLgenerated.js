import React,{useEffect} from "react";
import './Styles.css'
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineCheck, AiFillPrinter } from "react-icons/ai";
import Sidenavbar from "../components/Sidenavbar";
import { LuFolderCheck } from "react-icons/lu";
import Navbartitle from "../components/Navbartitle";
import { useSelector } from "react-redux";
export default function RlplGenerated() {

  useEffect(()=>{
    window.sessionStorage.removeItem('tableData')
  },[])
  const navigate = useNavigate();
  
  const sample=useSelector(state =>state.form.sampleDetails);
  
  const batch=useSelector(state =>state.form.newArray)
  console.log("batch",batch)
  return (
    <div className="app">
    <Navbartitle/>

      <div className="d-flex">
      <Sidenavbar />
      <div className="main">
        <div className="mainitem">
        
          

          <div
            className="tablet"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "50%",
                border: "none",
                marginTop: 50,
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="mt-1 mb-3">
                  <LuFolderCheck size={80} color="#9AC037" />
                </div>
                <div>
                  <text className="topWord">
                    The Samples has been Approved, The RLPL has been generated
                    for below batches
                  </text>
                </div>
              </div>

              <div>
                <div className="mt-4">
                  <h4 className="headd">Sample Details</h4>
                  <Table md={6} borderless>
                    <thead>
                      <tr>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Name of the Sample
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Sample Type
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Nature of Sample
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Storage Condition
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#3A4175" }}>{sample.samplename}</td>
                        <td style={{ color: "#3A4175" }}>{sample.sampletype}</td>
                        <td style={{ color: "#3A4175" }}>{sample.natureofsample}</td>
                        <td style={{ color: "#3A4175" }}>{sample.storage}</td>
                      </tr>
                    </thead>
                  </Table>

                  <Table md={6} border={1}>
                    <thead>
                      <tr className="table">
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          S.No
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Registration No
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Batch No./Lot No(s)
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Batch Size
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Batch Quantity
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Test Parameter
                        </th>
                      </tr>
                      {batch.map((item,i)=> (
                      <tr key={i}>
                      <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {i+1}
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {item.rlplNumber}
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {item.batchNo}
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {item.batchSize}
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {item.sampleQuantity}
                        </td>
                        <td
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            borderLeft: "1px solid #d1d1d1",
                            borderBottom: "none",
                          }}
                        >{item.testParameter.map((value,index)=>(
                          <li key={index}>{value.testDataName}</li>
                         ))}

                        </td>
                      </tr>
                       ))}
                    </thead>
                     
                  </Table>
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <div>
                      <Button
                        className="Rlplbutton"
                        style={{
                          height: "40px",
                          width: "166px",
                          borderRadius: "6px",
                          backgroundColor: "#3A4175",
                          fontWeight: 600,
                          fontSize: 12,
                          border: "none",
                        }}
                        name="Next"
                      >
                        <AiOutlineMail size={20} color="#fff" />
                        &nbsp; Send an email
                      </Button>
                      <Button
                      onClick={() => navigate("/Print")}
                        className="Rlplbutton"
                        style={{
                          height: "40px",
                          width: "122px",
                          borderRadius: "6px",
                          backgroundColor: "#9AC037",
                          fontWeight: 600,
                          fontSize: 12,
                          marginLeft: 20,
                          border: "none",
                        }}
                        name="Next"
                      >
                        <AiFillPrinter size={20} color="#fff" onClick={()=>navigate("/Print")} />
                        &nbsp; Print 
                      </Button>
                    </div>

                    <Button
                      className="Rlplbutton"
                      onClick={() => navigate("/Progress")}
                      style={{
                        height: "40px",
                        width: "122px",
                        borderRadius: "6px",
                        backgroundColor: "#3A4175",
                        fontWeight: 600,
                        fontSize: 12,
                        border: "none",
                      }}
                      name="Next"
                    >
                      <AiOutlineCheck size={20} color="#fff" />
                      &nbsp; Done
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}