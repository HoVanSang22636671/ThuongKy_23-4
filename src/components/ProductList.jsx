function ProductList({ products, onDelete }) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">📋 Danh sách sản phẩm</h2>
        {products.length === 0 ? (
          <p>Không có sản phẩm nào</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="border p-3 flex justify-between items-center rounded shadow mb-2"
            >
              <div>
                <p className="font-semibold">{product.name}</p>
                <p>💰 {product.price.toLocaleString()} VND</p>
                <p>📦 {product.category} | Tồn kho: {product.stock}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => onDelete(product.id)}
              >
                Xoá
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default ProductList;
  