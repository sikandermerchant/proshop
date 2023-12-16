// import React, { useEffect, useState } from 'react'
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
// import axios from 'axios'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'


const HomeScreen = () => {
  //Fetching data using useEffect and Axios
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products')
  //     setProducts(data)
  //   }
  //   fetchProducts()
  // }, [])

  //Fetching data using Redux Toolkit and Slice
  const { data: products, isLoading, error } = useGetProductsQuery()
  return (
    <>
      {isLoading ? (
        <h2>Loading ...</h2>
      ) : error ? (<div>{error?.data?.message || error.error}</div>) :
          
          (<>
         <h1>Latest Products</h1>
         <Row>
           {products.map(product => (
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               <Product product={product}/>
             </Col>
           ))}
         </Row>
      </>
      )}
     
    </>
  )
}

export default HomeScreen