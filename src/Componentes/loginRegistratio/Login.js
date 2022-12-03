import React,{useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

function Login() {
const [user,setUser] = useState({
  email:"",password:""
})

useEffect(()=>{
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}, [])


  const[text,setText] = useState("");
let name, value;
  const handleInputs = (e)=>{
    name = e.target.name
    value = e.target.value
    setUser({...user,[name]:value})
}

const Verify = async(e)=>{
  const navigate = useNavigate()
  e.preventDefault()
  //let email
  const {email,password} = user
  console.log(user);
  console.log(password,email)

      //email = data
      axios.post("http://localhost:9000/api/v1/login",{email,password},{
          headers:{
              "Content-Type":"application/json"
          }
      }).then((res)=>{
          console.log(res)
          if(res.status === 200){
              const token = res.data.Token
              const userData = res.data.User.name
              console.log("setting local storage");
              localStorage.setItem('token',token)
              localStorage.setItem('user',userData)
              setText("")
              // history.push('/orders')
              navigate('/Login')
          
          }
      }).catch(error=>{
          setText("Invalid")
      })
  
}




  return (
    <div className='LoginPage'>
        <h1>Login</h1>
        <input
            className="input_fields"
            type="text"
            onChange={handleInputs}
            placeholder="UserName"
            name="email"
            value={user.email}
          ></input>
          <input
            className="input_fields"
            onChange={handleInputs}
            name="password"
            value={user.password}
            type="Password"
          ></input>
          <Link to="/Booklist"><button onClick={Verify} type="submit">Login</button></Link>
          <Link to="/Signup"><button type="submit">Signup</button></Link>
    </div>
  )
}

export default Login