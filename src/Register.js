import React from 'react';
import Button from 'react-bootstrap/Button';
import './Register.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";


function Register() {

  const navigate=useNavigate();
  

  const [data, setData] = useState({
    name: "",
    age: "",
    place: "",
  });
  const a = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const add=()=>{
if(data.name,data.age,data.place){
    axios.post('http://localhost:4000/Register',data).then((response)=>{

console.log(response.data.status);
if(response.data.status == 200)
{
  alert('Registration Successful')
  navigate('/table')
}
else{
  alert('Registration Failed')
}

})
    .catch((err)=>{
      setData(err)
    })
  }
  else{
    alert('you did not enter data')
  }
}
  return (
    <div>
<div class="bord">
        <h4>Employee Register</h4><br/>
        <form>
        <div> <input type="text" name="name" placeholder="Full Name" onChange={a}/></div><br/>
        <div> <input type="text" name="age" placeholder='Age' onChange={a}/> </div> <br/>
        <div>  <input type="text" name="place" placeholder='Place'onChange={a}/> </div><br/>
    
        <Button variant="outline-warning" onClick={add}>Add</Button>{' '}
      <Button variant="outline-danger">Cancel</Button>{' '}
        </form>
</div>
        </div>
  )
}

export default Register