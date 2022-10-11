import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <Router>
      <div className="App">
        <Navbar setSelectedCategory={setSelectedCategory}/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/products'>
            <ProductList selectedCategory={selectedCategory}/>
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
