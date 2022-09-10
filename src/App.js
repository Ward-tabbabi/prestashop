import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCrad from './ProductCrad';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://la-mode.shop/api/products?ws_key=SH97SWJXX4NIXZ8ZELVFQ1EXZERWMT8N&output_format=JSON").then(result =>
      setProducts(result.data.products))
  }, []);
  
  console.log(products)
  return (
    <div className="App">
    {products.map(el=><ProductCrad element={el}/>)}
    </div>
  );
}

export default App;
