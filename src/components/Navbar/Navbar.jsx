import { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import './Navbar.css';

function Navbar() {
  const {loading, error, data: categories} = useApi('https://fakestoreapi.com/products/categories', []);

  const history = useHistory();

  useEffect(()=>{
    if(!loading && categories.length > 0) {
      history.push(`/products/${categories[0]}`);
    }
  }, [loading, categories, history]);

  return (
    <div className="navbar">
      <img className="navbar-logo" src="../../logo.svg" alt="" />
      { loading ?
          <p>Loading...</p> :
            error ?
              error :
                categories.length === 0 ?
                  <p>No categories found</p> :
                    <ul className='nav-links'>
                      {categories.map((category) => {
                        return (
                          <NavLink className='nav-link'
                          activeClassName='nav-link--selected'
                          key={`category-${category}`}
                          to={`/products/${category}`}
                          >
                            {category}
                          </NavLink>
                        )
                      })}
                    </ul>
      }
    </div>
  )
}

export default Navbar;