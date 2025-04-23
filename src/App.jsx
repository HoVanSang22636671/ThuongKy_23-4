// src/App.jsx
import { useState, useEffect } from 'react';
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductFrom";
import SearchProduct from "./components/SearchProduct";
import FilterCategory from "./components/FilterCategory";

const defaultProducts = [
  { id: 1, name: "Áo thun", price: 200000, category: "Thời trang", stock: 12 },
  { id: 2, name: "Tai nghe", price: 1500000, category: "Công nghệ", stock: 5 },
  { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 10 },
];

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  // Load dữ liệu từ localStorage khi ứng dụng khởi động
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem("products", JSON.stringify(defaultProducts));
    }
  }, []);

  // Lưu dữ liệu vào localStorage khi products thay đổi
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Xử lý thêm sản phẩm
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Xử lý xóa sản phẩm
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Xử lý từ khóa tìm kiếm từ SearchProduct
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Xử lý danh mục được chọn từ FilterCategory
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm và danh mục
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "Tất cả" ? true : product.category === selectedCategory
    );

  // Tính tổng số sản phẩm và tổng tồn kho
  const totalProducts = filteredProducts.length;
  const totalStock = filteredProducts.reduce((sum, product) => sum + product.stock, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h1>
      <SearchProduct onSearch={handleSearch} />
      <FilterCategory onFilter={handleFilter} />
      <AddProductForm onAdd={handleAddProduct} />

      {/* Hiển thị tổng số sản phẩm và tổng tồn kho */}
      <div className="mb-4 text-lg font-semibold">
        Tổng sản phẩm: {totalProducts} | Tổng tồn kho: {totalStock}
      </div>

      <ProductList products={filteredProducts} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default App;