import './style/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllDestinations from './components/AllDestinations';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route exact path='/' render={(props) => <Home {...props}/>  }  />
        <Route exact path='/AllDestinations' render={(props) => <AllDestinations {...props}/>  }  />
        <Route exact path='/' render={(props) => <Home {...props}/>  }  />
      </Switch>
    </div>
  );
}

export default App;
