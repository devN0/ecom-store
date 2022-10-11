import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/products/:categoryName'>
            <ProductList />
          </Route>
          <Route path='/not-found'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
