
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome-free/css/all.css";
import "@fortawesome/react-fontawesome-free/js/all.js";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './app/partials/Header';
import Home from './app/Home';
import AddCourse from './app/AddCourse';
import NotFound from './app/NotFound';


function App() {
  return (
   <Router>
    <Header />
    <div className="container mt-3">
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/add-course" component={AddCourse}/>
        <Route path="/edit-course/id" component={AddCourse}/>
        <Redirect from="" to="/home"/>
        <Route component={NotFound}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
