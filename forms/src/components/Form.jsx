import React, {useState} from 'react';
import './Form.css'


export const Form = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        alert(
            `username:${username}
             password:${password}`)
    }
    
    const reset = () => {
        console.log('reset')
        setUsername('');
        setPassword('');        
    }

    return (
        <div className='form'>            
            <input type='text' placeholder='username' value={username} onChange={userevent => {setUsername(userevent.target.value)}}></input>
            <input type='text' placeholder='password' value={password} onChange={passevent => {setPassword(passevent.target.value)}}></input>
            <button onClick={login} >login</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}