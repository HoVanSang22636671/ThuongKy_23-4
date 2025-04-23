function FilterCategory({ onFilter }) {
    const categories = ["Tất cả", "Thời trang", "Công nghệ", "Gia dụng"]; // Danh sách danh mục
  
    const handleFilterChange = (e) => {
      onFilter(e.target.value); // Gửi danh mục được chọn lên App
    };
  
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📑 Lọc theo danh mục</h2>
        <select
          className="border px-2 py-1 w-full max-w-md"
          onChange={handleFilterChange}
          defaultValue="Tất cả"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default FilterCategory;