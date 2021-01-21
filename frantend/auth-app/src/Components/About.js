import React from 'react'
import {Link} from 'react-router-dom'


export default function About() {
    return (
        <div>
            <h2>This app for inter view test module</h2>
            <p>If want to go admin Dashboard First you must login then access Admin  </p>
            <Link to ='/login'> Login here...</Link>
        </div>
    )
}
