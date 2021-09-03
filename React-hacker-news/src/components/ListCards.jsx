import React, { useState } from 'react';
import {getNewsData} from '../services/GetData'
import {Card} from './Card';
const urlID = 'https://hacker-news.firebaseio.com/v0/topstories.json' 

export const ListCards = () => {
    const [newsItems, setNewsItems] = useState([]);

   /* getNewsData().then(newsItems => {
        setNewsItems(newsItems);
    })*/

    
    //console.log(getNewsData())


    return (
        <ol className='list-cards'>
            <Card newsItems={newsItems}/> 
        </ol>
        
    )
}