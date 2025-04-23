import { useState, useEffect } from 'react';
import ProductList from "./components/ProductList";
import AddProductForm from './components/AddProductFrom';

const defaultProducts = [
  { id: 1, name: "Áo thun", price: 200000, category: "Thời trang", stock: 12 },
  { id: 2, name: "Tai nghe", price: 1500000, category: "Công nghệ", stock: 5 },
  { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 10 },
];

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem("products", JSON.stringify(defaultProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-4">
      <AddProductForm onAdd={handleAddProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default App;
