import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/pages/Home';

function App() {
  return (
    <Router>
      <div>
      <Switch>        
        <Route exact path="/">
             <Home/>
        </Route>
        <Route  exact path="/ranking">
            <h1>Ranking</h1>
        </Route>
        <Route exact path="/iniciar-jogo">
            <h1>Iniciar Jogo</h1>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;



