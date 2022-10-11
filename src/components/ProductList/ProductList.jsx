import './ProductList.css';
import useApi from "../../hooks/useApi";
import ProductCard from "../ProductCard";
import { useParams } from 'react-router-dom';

function ProductList() {
  const {categoryName} = useParams();
  
  const {loading, error, data: products} = useApi(`https://fakestoreapi.com/products/category/${categoryName}`, []);

  return (
    <div className="product-list">
      {loading ?
        <p>Loading products...</p> :
            error ?
              error :
                products.length === 0 ?
                <p>No products found</p> :
                  products.map((product)=> {
                    return (
                      <ProductCard product={product} key={product.id} />
                    )
                  })
      }
    </div>
  )
}

export default ProductList;