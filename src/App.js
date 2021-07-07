import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/pages/Home';
import Game from './pages/Game';
import Ranking from './pages/Ranking/ranking';

function App() {
  return (
    <Router>
      <div>
      <Switch>        
        <Route exact path="/">
             <Home/>
        </Route>
        <Route  exact path="/game">
            <Game/>
        </Route>
        <Route exact path="/ranking">
            <Ranking/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;



