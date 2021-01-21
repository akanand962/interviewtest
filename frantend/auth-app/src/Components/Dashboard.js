import React from 'react'
import { Link , useHistory } from 'react-router-dom'

export default function Dashboard() {
    const history = useHistory()
  
const logOut = ()=>{
    localStorage.clear()
    history.push('/login')
}

    return (
        <div>
            <h1>Admin Dashboard </h1>
            <p>You can change every thing Because you are authorize User </p>
            <button className='btn btn-primary' onClick = {logOut}>Logout</button>

        </div>
    )
}
