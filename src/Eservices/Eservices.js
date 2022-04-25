import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import "./Eservices.css";
function Eservices() {
  
  const [DepartmentName,setDepartmentName]=useState("");
  const [ServiceName,setServiceName]=useState("");
  const [LaunchDate,setLaunchDate]=useState("");
  const [MajorVersion,setMajorVersion]=useState("");
  const [MinorVersion,setMinorVersion]=useState("");
  const [Description,setDescription]=useState("")

  function saveUser(){
    console.log(DepartmentName,ServiceName,LaunchDate,MajorVersion,MinorVersion,Description)
  }

  return (
    <div className="container22">
      <div>
        <h5 className="hd2">
          {" "}
          <b>Add Services</b>{" "}
        </h5>
        <div className="forme"> 
          <form onSubmit={(e)=> submit(e)}>
            <div class="form-group">
              <label for="exampleDepartmentName">Department Name</label>
              <input
              type="text"  value={DepartmentName} onChange={(e)=>{setDepartmentName(e.target.value)}} name="DepartmentName"
              placeholder="Enter Department Name "
              />
            </div>  <br></br>
            <div className="form-group">
              <label for="exampleServiceName">Service Name</label>
              <input
               type="text"  value={ServiceName} onChange={(e)=>{setServiceName(e.target.value)}} name="ServiceName"
                placeholder="Enter Service Name "
              />
            </div><br></br>
            <div className="form-group">
              <label for="date">Launch Date</label>
              <input
              type="text"  value={LaunchDate} onChange={(e)=>{setLaunchDate(e.target.value)}} name="LaunchDate"
                placeholder="Enter Launch Date "
              />
            </div><br></br>
            <div className="form-group">
              <label for="exampleInputEmail1">Major Version</label>
              <input
                  type="text"  value={MajorVersion} onChange={(e)=>{setMajorVersion(e.target.value)}} name="MajorVersion"
                placeholder="Enter Major Version  "
              />
            </div><br></br>
            <div className="form-group">
              <label for="exampleInputEmail1">Minor Version</label>
              <input
               type="text"  value={MinorVersion} onChange={(e)=>{setMinorVersion(e.target.value)}} name="MinorVersion"
              
                 
                placeholder="Enter Minor Version "
              />
            </div><br></br>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
               type="text"  value={Description} onChange={(e)=>{setDescription(e.target.value)}} name="Description"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>
            <br></br>
            <button type="submit" onClick={saveUser} class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Eservices;
