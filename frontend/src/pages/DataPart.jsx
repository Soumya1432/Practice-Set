// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const DataPart = () => {
//   const [product, setProduct] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true)
//         setError(false)
//         const response = await axios.get('/api/data')
//         setProduct(response) // Corrected this line
//         console.log(response)
//         setLoading(false)
//       } catch (error2) {
//         console.log('Error', error2)
//         setError(true)
//         setLoading(false)
//       }
//     })()
//   }, [])

//   if (error) {
//     return <h1>Something went wrong</h1>
//   }

//   if (loading) {
//     return <h1>Loading.................</h1>
//   }

//   return (
//     <div>
//       {/* {product.map((
// 				products // Changed 'index' to 'product' for clarity
// 			) =>
//   <div key={products.id}>
//     {' '}// Using product.id as the key
// 					<p>{products.name}</p>
//     <p>{products.email}</p>
//     <p>{products.text}</p>
//   </div>
// 			)} */}

// {
//     product.map((item)=>(
//         <div onAbort={AbortController} key={item._id}>
//             <li>{item.name}</li>
//         </div>
//     ))
// }

// {/* {product.map(products => (
//             <li className='text-blue-500' key={products.id}>
//               <b className='text-red-400'>Title:</b> {products.title}
//             </li>
//           ))}{' '} */}
//     </div>
//   )
// }

// export default DataPart

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataPart = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = 100 // Number of items per page

  const fetchData = async page => {
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get(`/api/data?page=${page}&limit=${limit}`)

      setProducts(response.data.data)
      setCurrentPage(response.data.currentPage)
      setTotalPages(response.data.totalPages)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(
		() => {
  fetchData(currentPage)
},
		[currentPage]
	)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Something went wrong. Please try again later.</h1>

  return (
    <div className='p-4 m-4'>
      <table className='border-2 border-slate-600'>
      <thead className=''>
        <tr className=''>
            <th className='border-2 border-slate-600' >Name</th>
            <th className='border-2 border-slate-600' >Emai Id</th>
            <th className='border-2 border-slate-600' >Description</th>
        </tr>
      </thead>

{ products.map((product)=>(
         <tbody>
            <tr key={product.id}>
                <td className='border-2 m-2 p-2 border-green-600'>{product.name}</td>
                <td className='border-2 m-2 p-2 border-green-600'>{product.email}</td>
                <td className='border-2 m-2 p-2 border-green-600'>{product.text}</td>
            </tr>
         </tbody>

))}



      </table>

      {/*
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.name}</p>
          <p>{product.email}</p>
          <p>{product.title}</p>
        </div>
      ))} */}
 
      <div className='flex justify-center space-x-8 mt-4' >
        <button onClick={handlePrevPage} disabled={currentPage === 1} className='bg-blue-400 px-6 py-2 text-white rounded-md '  >
					Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className='bg-orange-600 px-6 py-2 text-white rounded-md' >
					Next
		</button>
        <p className='flex justify-center items-center text-green-600' >
      Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default DataPart
