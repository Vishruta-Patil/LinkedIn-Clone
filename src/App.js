
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
      <Router>
        <Switch>

          <Route exact path = '/'>
            <Login />
          </Route>

          <Route path='/home'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>   
    
  );
}

export default App;
