import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import Register from './Components/Register'
import Protected from './Components/Protected'
import Dashboard from './Components/Dashboard'
import NotFound from './Components/NotFound'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
         <Route  exact path='/'  component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login'  component={Login} />
        <Route exact path='/register' component={Register} />

        <Protected  component = {Dashboard}/>
        <Route  component={NotFound} />

      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
