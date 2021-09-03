import './App.css';
import React, {Fragment} from 'react';
import {Header} from './components/Header';
import { ListCards } from './components/ListCards';

function App() {
  return (
    <Fragment>
      <Header />
      <ListCards />
    </Fragment>
  );
}

export default App;
