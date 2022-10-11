import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome home</h1>
      <Link to="/products">Go to products</Link>
      <br/>
      <Link to="/not-found">Go to not found</Link>
    </>
  )
}
export default Home;