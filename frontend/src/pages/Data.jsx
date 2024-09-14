import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

// Debounce function to limit API calls
// const useDebounce = (callback, delay) => {
//   const debounceRef = React.useRef();

//   const debouncedCallback = useCallback((...args) => {
//     if (debounceRef.current) {
//       clearTimeout(debounceRef.current);
//     }
//     debounceRef.current = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   }, [callback, delay]);

//   return debouncedCallback;
// };

const Data = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchProducts = useCallback(async (searchTerm) => {
    const controller = new AbortController();
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(`/api/products?search=${searchTerm}`, {
        signal: controller.signal,
      });
      setProducts(response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
        return;
      }
      setError(true);
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, []);

  // Debounce fetchProducts function
  const debouncedFetchProducts = useDebounce(fetchProducts, 300); // 300 ms debounce time

  useEffect(() => {
    if (search.trim()) {
      debouncedFetchProducts(search);
    }
  }, [search, debouncedFetchProducts]);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='p-10'>
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ol>
        <div className='text-md'>
          Number of products are{' '}
          {products.map(product => (
            <li className='text-blue-500' key={product.id}>
              <b className='text-red-400'>Title:</b> {product.title}
            </li>
          ))}{' '}
        </div>
      </ol>
    </div>
  );
};

export default Data;
// return ()=>{}  this method called cleanup method