import { useState } from 'react';
import ProductList from "./components/ProductList"

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Áo thun", price: 200000, category: "Thời trang", stock: 12 },
    { id: 2, name: "Tai nghe", price: 1500000, category: "Công nghệ", stock: 5 },
    { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 10 },
  ]);

  return (
    <div className="p-4">
      <ProductList products={products}/>
    </div>
  )
}

export default App
