import React, { useState } from "react";
import './Styles.css';
import './NewTable.css'
import Sidenavbar from '../components/Sidenavbar';
import {useNavigate} from 'react-router-dom';

export default function NewTable() {
    const navigate = useNavigate();
  const [name,setName]=useState("")
  const [allData,setAllData]=useState([])
  const [show,setShow]=useState(false)
  const [editIndex,setEditIndex]=useState()

  const handleAdd=()=>{
      if(name.length!==0){
      setAllData(newData=>[...newData,name])
      setName("")
      }
  }

  const handleDelete=(index)=>{
      allData.splice(index,1)
      setAllData([...allData])
  }

  const handleEdit=(i)=>{
      setName(allData[i])
      setShow(true)
      setEditIndex(i)
  }
  const handleUpdate=()=>{
      allData.splice(editIndex,1,name)
      setAllData([...allData])
      setShow(false)
      setName("")
  }


  return (
    <div className='app'>
        
       <Sidenavbar/>

       <div className='main'>

        <h1>Dashboard screen</h1>


        <div>
            <h1>CRUD Insert, Update and Delete</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            {!show?<button onClick={handleAdd}>Add</button>:
            <button onClick={handleUpdate}>Update</button>}

            {
                allData.map((val,i)=>
                <div>
                    <h1>{val}</h1>
                    <button className="edit" onClick={()=>handleEdit(i)} >Edit</button>
                    <button className="delete" onClick={()=>handleDelete(i)}>Delete</button>
                </div>
                )
            }
        </div>

       </div>

      
        
        </div>
  )
}
