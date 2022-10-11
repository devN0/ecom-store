import { useCallback } from 'react';
import useApi from '../../hooks/useApi';
import './Navbar.css';

function Navbar({setSelectedCategory}) {
  const {loading, error, data: categories} = useApi('https://fakestoreapi.com/products/categories', []);

  const handleCategoryClick = useCallback( (category) => {
    setSelectedCategory(category);
  }, [setSelectedCategory]);

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
                          <li className='nav-link'
                          key={`category-${category}`}
                          onClick={()=>handleCategoryClick(category)}
                          >
                            {category}
                          </li>
                        )
                      })}
                    </ul>
      }
    </div>
  )
}

export default Navbar;