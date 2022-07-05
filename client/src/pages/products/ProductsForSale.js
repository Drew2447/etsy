import axios from "axios"
import { useEffect, useState } from "react"
import Seller from "./Seller"

const ProductsForSale = () => {
  const [sellerProperties, setSellerProperties] = useState([])
  useEffect(()=> {
    getSellerProperties()
  }, [])

  const normalizeRawData = (rawData) => {
    const sellerIDs = rawData.map((rd)=> rd.seller_id)
    const uniqueIDs = [...new Set(sellerIDs)]
    return uniqueIDs.map((id)=> {
      let products = rawData.filter((p)=> p.seller_id === id)
      let cleanedProducts = products.map((p)=> {
        return {
          id: p.product_id,
          price: p.price,
          description: p.description,
          category: p.category
        }
      })
      return {
        email: products[0].email,
        name: `${products[0].first_name} ${products[0].last_name}`,
        products: cleanedProducts
      }
    })
  }

  const getSellerProperties = async () => {
    try {
      let res = await axios.get("/api/products")
      let normalizedData = normalizeRawData(res.data)
      setSellerProperties(normalizedData)
    } catch(err) {
      alert("Error occurred in getProductProperties")
    }
  }

  const renderSellerProperties = () => {
    return sellerProperties.map(p => {
      return <Seller key={p.id} {...p} />
    })
  }

  return (
    <div>
      <h1>Products For Sale</h1>
      {renderSellerProperties()}
      {/* <p>{JSON.stringify(productProperties)}</p> */}
    </div>
  )
}

export default ProductsForSale