function ProductList() {
  const products = [
    // Normal cases
    {
      id: 1,
      name: "Laptop",
      description: "High-performance laptop",
      price: 1200,
    },
    {
      id: 2,
      name: "Phone",
      description: "Smartphone with great camera",
      price: 800,
    },
    {
      id: 3,
      name: "Headphones",
      description: "Noise cancelling headphones",
      price: 250,
    },
    {
      id: 4,
      name: "Monitor",
      description: "4K monitor",
      price: 400,
    },

    // Edge case 1 — price = 0
    {
      id: 5,
      name: "Free item",
      description: "Test product",
      price: 0,
    },

    // Edge case 2 — missing description
    {
      id: 6,
      name: "Tablet",
      price: 300,
    },

    // Edge case 3 — very high price
    {
      id: 7,
      name: "Super Computer",
      description: "Expensive item",
      price: 999999,
    },
  ];

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>

          <p>
            Description:{" "}
            {product.description ? product.description : "No description"}
          </p>

          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
