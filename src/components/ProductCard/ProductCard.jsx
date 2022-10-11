import './ProductCard.css'
function ProductCard({product}) {
  return (
    <div className="product-card">
      <img className="p-c-img" src={product.image} alt={product.title} />
      <div className="p-c-body">
        <h4 className="p-c-title">{product.title}</h4>
        <h5 className="p-c-price">{product.price}</h5>
        {/* <p className="p-c-desc">{product.description}</p> */}
      </div>
    </div>
  )
}
export default ProductCard;