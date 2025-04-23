function ProductList({products}) {
    return ( 
        <div>
      <h1 className="text-xl font-bold mb-4">📦 Danh sách sản phẩm</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Tên</th>
            <th className="border px-2 py-1">Giá</th>
            <th className="border px-2 py-1">Danh mục</th>
            <th className="border px-2 py-1">Tồn kho</th>
            <th className="border px-2 py-1">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border px-2 py-1">{p.name}</td>
              <td className="border px-2 py-1">{p.price.toLocaleString()}₫</td>
              <td className="border px-2 py-1">{p.category}</td>
              <td className="border px-2 py-1">{p.stock}</td>
              <td className="border px-2 py-1">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     );
}

export default ProductList;