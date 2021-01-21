
import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

export default function Register() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
      console.log(email)
      console.log(password)

      const register = (event)=>{
        event.preventDefault()

        fetch('http://localhost:5000/signup',
        {
            method:"POST",
            body:JSON.stringify({
                name:name,
                email:email,
                password:password
            }),
            headers:{ 
                "Content-type": "application/json; charset=UTF-8"
            } 
    
        })
        .then((result)=>{
            alert('user Register successfully')
        })
    
    }
    return (
        <div>
          <h1>User Registration</h1>
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
                <label >Name</label>
                <input onChange={(e)=>setName(e.target.value)}
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
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
    
              <button onClick ={register} type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    
}
