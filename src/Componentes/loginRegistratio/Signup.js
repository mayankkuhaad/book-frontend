import axios from 'axios';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
   name:"", email:"", password:""
  });

  let name, value;

  const handleInputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }



  

const PostData = async (e)=>{
  e.preventDefault();


  var {name, email, password} = user; 
  console.log(user);
  axios.post("http://localhost:9000/api/v1/register", {name, email, password},{
    headers : {
      "Content-Type" : "application/json"
    }
  }).then((res)=>{
    console.log(res);
    if(res.status===200){
      navigate('/Login')
    }
  }).catch(error=>{
    window.alert("invalid user details")
  })

}



  return (
    <div className='Signup'>
        <h1>Register</h1>
        <form method="POST">
        <input
            className="input_fields"
            type="text"
            onChange={handleInputs}
            placeholder="name"
            name="name"
            value={user.name}
          ></input>
        <input
            className="input_fields"
            type="text"
            onChange={handleInputs}
            placeholder="username"
            name="email"
            value={user.email}
          ></input>
          <input
            className="input_fields"
            onChange={handleInputs}
            name="password"
            placeholder="password"
            type="Password"
            value={user.password}
          ></input>
          <Link to="/login"><button onClick={PostData} type="submit">Register</button></Link>
          </form>
    </div>
  )
}

export default Signup