
import {Fragment} from 'react';
import Header from './Header'
import {Footer} from './Footer'
import {UserList} from './userlist/UserList'
import React, {useState} from 'react';
import {Search} from './Search'
import Loading from './partials/Loading';




const Home = () => {
  const [toggleView, setToggleView] = useState(true)
  const changeView = () => setToggleView(!toggleView);

  const [searchTerm, setSearchTerm] = useState('');

  const [refreshState, setRefreshState] = useState(true)
  const refresh = () => {setShowLoading(true)
                         setRefreshState(!refreshState)};
  

  const [showLoading, setShowLoading] = useState(true)
    
  return (
    <Fragment>
      <Header changeView={changeView} refresh={refresh} />
      <Search setSearchTerm={setSearchTerm}/>           
      <UserList searchTerm={searchTerm} toggleView={toggleView} refreshState={refreshState} setShowLoading={setShowLoading} showLoading={showLoading}/>
      <Footer />      
    </Fragment>        
    )
}

export default Home;




