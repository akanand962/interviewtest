import React from 'react'
 import banner from '../assets/image/carousel-3.jpg'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <img  src={banner} height='500px' width='100%'/>
            <h2>Home section</h2>
        </div>
    )
}
