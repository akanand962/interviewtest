import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

export default function Logout() {
    const history = useHistory()
    localStorage.clear()

    useEffect(()=>{
        setTimeout(()=>{
            history.push('/login')

        },1000)
    })
    return (
        <div>
            <h4>Logout successfully</h4>
        </div>
    )
}
