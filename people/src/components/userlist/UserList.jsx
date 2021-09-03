import React, {useEffect, useState} from 'react';
import {User} from '../user/User';
import {Blog} from '../blog/Blog';
import { getUserData } from '../../services/getUserData';
import Loading from '../partials/Loading'


export const UserList = ({searchTerm, toggleView, refreshState, setShowLoading, showLoading}) => {    
    
    const [users, setUsers] = useState([])

    /*const refresh = () => {
        setUsers([]);
        getUserData().then(users => {
        setUsers(users)
        })
    }*/

    useEffect(() => {        
        if (localStorage.getItem('lastUsers') === null ) {
            console.log('nije null' + localStorage.getItem('lastUsers'))
            getUserData().then(users => {
            setUsers(users)
            setShowLoading(false)
            localStorage.setItem('lastUsers', JSON.stringify(users));
            console.log('novi lokal' + localStorage.getItem('lastUsers'))
        })}       
        else {
            console.log('else')
            let lastUsers = JSON.parse(localStorage.getItem('lastUsers'))
            console.log(localStorage.getItem('lastUsers'))
            setUsers(lastUsers)
            setShowLoading(false)
            //localStorage.setItem('lastUsers', JSON.stringify(users));            
        }
    },[refreshState])

    return (        
        <div className='container row'>      
            {showLoading ? (<Loading />) :       
            (   users.filter(users => {
                if (users.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return users                    
                }
            }).map((user, index) =>              
            toggleView?(
                <Blog 
                imgOfUser={user.picture2}
                firstName={user.name}
                email={user.email}
                dateOfBirth={user.dob}
                key={index} />):
            (
                <User
                imgOfUser={user.picture1}
                firstName={user.name}
                email={user.email}
                dateOfBirth={user.dob}
                key={index}
                />)
            ) )
           }   
        </div>
    )
}