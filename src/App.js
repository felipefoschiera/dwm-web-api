import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import ('./web/pages/home/Home'))
const UsuarioCon = lazy(() => import('./web/pages/usuarios/UsuarioCon'))

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Suspense fallback={<div>Carregando...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/usuarios" component={UsuarioCon} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
};

export default App;
