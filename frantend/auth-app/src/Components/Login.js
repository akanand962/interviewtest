import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
    console.log(email)
    console.log(password)


   const login = (event)=>{
    event.preventDefault()

    fetch('http://localhost:5000/signin',
    {
        method:"POST",
        body:JSON.stringify({
            email:email,
            password:password
        }),
        headers:{ 
            "Content-type": "application/json; charset=UTF-8"
        } 

    })
 .then((res)=>{
    res.json()
    .then(data =>{
      console.log(data)
      console.log(data.token,'hhh')
      if(data.token){
        localStorage.setItem('login',JSON.stringify(data.token))
        history.push('/dashroard')
      }
      else{
        alert('Plz check User Name and password')
      }
    })
 })
  //   .then(response => response.json()) 
    
  //   .then(response =>{
  //       if(response.length>0){
  //           localStorage.setItem('login',JSON.stringify(response))
  //           history.push('/dashboard')
  //       }
  //       else{
  //           alert('Plz Check user name and password Again...')
  //       }
  //   }); 
    

      
    }


  return (
    <div>
      <h1>Login UI</h1>
      <div
        style={{
          width: "600px",
          margin: "20px auto",
          padding: "20px",
          background: "#4dcab3",
        }}
      >
        <form>
          <div className="form-group">
            <label >Email address</label>
            <input onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label >Password</label>
            <input onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button onClick ={login} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
