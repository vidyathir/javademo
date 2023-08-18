import React from "react";
import "./Styles.css";
// import Sidenavbar from "../components/Sidenavbar";
// import Navbartitle from '../components/Navbartitle';

// import { useNavigate } from "react-router-dom";

import { BsFileEarmarkCheck } from "react-icons/bs";
import { Table } from "react-bootstrap";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarDIT from "../components/SidenavbarDIT";

export default function DITSuccess() {
  // const navigate = useNavigate();

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
                  <tr>
                    <td>1</td>
                    <td>TDS/SOR/23/1234</td>
                    <td>SRO</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>TDS/SOR/23/1234</td>
                    <td>XRD</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>TDS/SOR/23/1234</td>
                    <td>DSC</td>
                  </tr>
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
