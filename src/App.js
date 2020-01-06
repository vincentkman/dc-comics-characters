import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CharacterProvider } from './context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterInfo from './pages/CharacterInfo';
import NotFound from './pages/NotFound';
import './App.scss';

function App() {
  return (
    <div className="App">
      <CharacterProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route exact={true} path='/characters' component={Characters} />
              <Route path='/characters/:id' component={CharacterInfo} />
              <Route component={NotFound} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </Router>
      </CharacterProvider>
    </div>
  );
}

export default App;