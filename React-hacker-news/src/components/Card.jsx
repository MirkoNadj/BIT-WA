import React from 'react';

export const Card = ({title, from, url,score, by, time, comments}) => {

    return (
        <li className='card'>
            <p className='title'>{title}<span className='from'>({from})</span></p>
            <p><span className='score'>heartfont{score} points</span>
               <span className='author'>avatarfont{by}</span>
               <span className='time'>clockfont{time}</span>
               <span className='comments'>{comments} comments</span>
               </p>
        </li>
    )
}