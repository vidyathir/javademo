import React from "react";
import "./Styles.css";

import { useNavigate } from "react-router-dom";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { Table } from "react-bootstrap";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarDIT from "../components/SidenavbarDIT";
import { useSelector } from "react-redux";
export default function DITSuccess() {
const navigate=useNavigate()
const dit=useSelector(state=>state.form.ditresponse);
  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <SidenavbarDIT />

        <div className="main">
          <div className="DITSuccess-card">
            <div>
              <BsFileEarmarkCheck size={80} color={"#9AC037"} />
            </div>

            <div className="mt-3">
              <text className="DITSuccesstext">
                The TDS has been generated Successfully
              </text>
            </div>

            <div className="mt-3">
              <Table responsive border={1}>
                <thead className="table-custom">
                  <tr>
                    <th>S.No</th>
                    <th>TDS Number</th>
                    <th>Test Parameter</th>
                  </tr>
                </thead>
                <tbody className="tablebody-custom">
                {dit.map((item,i)=>(
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.tdsNumber}</td>
                    <td>{item.testDataCode}</td>
                  </tr>

                ))}
                </tbody>
              </Table>
            </div>

            <div className="mt-3">
              <button
                style={{
                  width: 80,
                  height: 40,
                  borderRadius: 6,
                  background: "#9AC037",
                }}
                className="DITSuccessButton"
                onClick={()=>navigate("/DitDashboard")}
              >
                <text className="DITSuccessButtontext">ok</text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
