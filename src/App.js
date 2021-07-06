import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <h1>Home</h1>
        </Route>
        <Route  exact path="/ranking">
            <h1>Ranking</h1>
        </Route>
        <Route exact path="/iniciar-jogo">
            <h1>Iniciar Jogo</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
