import React, { Component ,useEffect} from 'react'
import {Redirect,Route, useHistory} from 'react-router-dom'

// const Protected = ({Component:Comp,...rest}) =>(
//    <Route {...rest} render={(props) => (
//    localStorage.getItem('login')
//     ?<Comp {...props} />
//     :<Redirect to='/login' />)
// } />
// )




const Protected = (props) =>{
     const history = useHistory() 
    const Comp = props.Comp

    useEffect(() => {
      
        if(!localStorage.getItem('login')){
            history.push('/login')
        }
   }, [])
    return (
        <div>
           <Comp />
        </div>
    )
}

export default Protected