import { useState } from "react";

function SearchProduct({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Gửi từ khóa tìm kiếm lên App
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">🔍 Tìm kiếm sản phẩm</h2>
      <input
        type="text"
        className="border px-2 py-1 w-full max-w-md"
        placeholder="Nhập tên sản phẩm..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchProduct;