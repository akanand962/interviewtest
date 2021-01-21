import React, { Component } from 'react'
import {Redirect,Route} from 'react-router-dom'

const Protected = ({Component:Comp,...rest}) =>(
   <Route {...rest} render={(props) => (
   localStorage.getItem('login')
    ?<Comp {...props} />
    :<Redirect to='/login' />)
} />
)

export default Protected