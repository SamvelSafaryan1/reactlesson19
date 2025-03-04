import React from 'react'
import { useLocation } from 'react-router-dom'

function Profile(){
    let {state} = useLocation()
    
    return(
        <div>
            <h2>Name: {state.name}</h2>
            <h2>Email: {state.email}</h2>
        </div>
    )
}

export default Profile
