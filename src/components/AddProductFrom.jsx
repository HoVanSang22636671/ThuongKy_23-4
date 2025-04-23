// src/components/AddProductForm.jsx
import { useState } from "react";

function AddProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.category || !form.stock) return;

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      category: form.category,
      stock: Number(form.stock),
    };

    onAdd(newProduct);
    setForm({ name: "", price: "", category: "", stock: "" });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">➕ Thêm sản phẩm mới</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          className="border px-2 py-1"
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1"
          type="number"
          name="price"
          placeholder="Giá"
          value={form.price}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1"
          type="text"
          name="category"
          placeholder="Danh mục"
          value={form.category}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1"
          type="number"
          name="stock"
          placeholder="Tồn kho"
          value={form.stock}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Thêm sản phẩm
      </button>
    </div>
  );
}

export default AddProductForm;
