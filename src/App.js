import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import { CounterExample } from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'


function App() {
  return (
    <div className="appLayout">
      <Router>

        <Header />
        
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>

      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
