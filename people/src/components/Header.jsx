import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = ({changeView, refresh}) => {
    
    return ( 
        <div className='container row header'>
        <h1 className='col-4'>BIT PEOPLE</h1>
        <ul className='col-6'>
            <li><Link to='../home'>Home</Link></li>
            <li><Link to='../about/O nama'>About</Link></li>
            <li onClick={refresh}>Refresh</li>
            <li onClick={changeView}>View</li>
            
        </ul>        
    
    </div>
    );
}

export default Header;
