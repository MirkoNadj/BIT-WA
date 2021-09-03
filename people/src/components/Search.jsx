import React from 'react';

export const Search = ({setSearchTerm}) => {    
    return (
<input type="text" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}} />
    )};
