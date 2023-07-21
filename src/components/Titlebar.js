import React from 'react'
import profilepic from "../assets/avater2.jpg";
import {IoIosAddCircleOutline} from 'react-icons/io';
import {useNavigate} from 'react-router-dom'

export default function Titlebar() {
  const navigate = useNavigate();
  return (

    <div className="maintitlestyle">
    <div>
      <text className="title">
        Welcome Back Jeyaprakash{" "}
        <text className="titlecolor">(SRO)</text>
      </text>
    </div>
    <div className='titlebuttonprofile'>

      <div >
          <button className='titlebuttonsize' onClick={()=>navigate('/AddNewCustomer')}>
            <IoIosAddCircleOutline size={24} color={'#ffffff'}/>
            <text className='titlebuttontext'>Add Company</text>
          </button>
      </div>
    
    <div className="titleprofile">
      <img className="profilepic" src={profilepic} alt="profile" />
      <select className="titleselect titleselectsize">
        <option className="titleselect">Jeyaprakash</option>
        <option className="titleselect">Mahendra varma</option>
      </select>
    </div>

    </div>
  </div>
  )
}
