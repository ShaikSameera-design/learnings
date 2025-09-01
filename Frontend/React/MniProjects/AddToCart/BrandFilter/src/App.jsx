import { useState } from 'react'
import './App.css'

const productsData = [
  { id: 1, name: "iPhone 14", brand: "Apple" },
  { id: 2, name: "Galaxy S23", brand: "Samsung" },
  { id: 3, name: "Pixel 7", brand: "Google" },
  { id: 4, name: "MacBook Pro", brand: "Apple" },
  { id: 5, name: "Galaxy Watch", brand: "Samsung" },
];

function BrandSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2>Search brand</h2>
      <input
        type="text"
        placeholder="search here.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // ✅ fixed
      />

      {filteredProducts.length > 0 ? (   // ✅ wrapped in {}
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} <span>({product.brand})</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Products Found !!</p>  
      )}
    </>
  );
}

export default BrandSearchFilter;
