import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./Empedit.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Empedit() {
 
const [name,setName]=useState()
const [age,setAge]=useState()
const [place,setPlace]=useState()

const changename=(e)=>{
  setName(e.target.value)
}
console.log(name);
const changeage=(e)=>{
  setAge(e.target.value)
}
const changeplace=(e)=>{
  setPlace(e.target.value)
}


const id=useParams()


// console.log(id.id);
const getdata=()=>{
axios.get("http://localhost:4000/viewone/"+id.id)
    .then((response) => {
      setAge(response.data.data.age);
      setName(response.data.data.name);
      setPlace(response.data.data.place);
    })
  }

useEffect(()=>{
  getdata()
},[])
console.log(name,"l");
console.log(age,"m");
console.log(place,"0");


const updateid = (id) => {
  axios.post("http://localhost:4000/update/"+id.id,{name,age,place}).then((response) => {
    console.log(response.data.data);
  });
};


  return (
    <div>
      <div class="bord">
        <form>
          <div class="marg">
            <div>
              {" "}
              <input type="text" placeholder="Full Name" value={name} onChange={changename}/>
            </div>
            <br />
            <div>
              {" "}
              <input type="text" placeholder="Age" value={age} onChange={changeage}/>{" "}
            </div>{" "}
            <br />
            <div>
              {" "}
              <input type="text" placeholder="Place" value={place} onChange={changeplace}/>{" "}
            </div>
            <br />
            <Button variant="outline-warning" onClick={()=>{updateid(id)}}>Edit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Empedit;
