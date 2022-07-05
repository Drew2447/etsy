import axios from "axios"
import { useState } from "react"
import { useAxiosOnMount } from "../../hooks/UseAxiosOnMount"
import { Card, Select } from "semantic-ui-react"
import ProductCard from "../../components/shared/ProductCard"

const Categories = () => {
  const {data: categories, loading} = useAxiosOnMount('/api/categories')
  const [products, setProducts] = useState([])

  const handleChange = async (e, {value}) => {
    try {
      let res = await axios.get(`/api/categories/${value}`)
      setProducts(res.data)
    } catch (err) {
      alert('Error has occurred in handle change')
    }
  }

  const renderSelect = () => {
    if(loading) {
      return <Select disabled placeholder='loading' options={[]} />
    }
    let categoryOptions = categories.map((c) => {
      return {key: c, value: c, text: c}
    })
    return(
      <Select
      onChange={handleChange}
      placeholder="Select Category"
      options={categoryOptions}
      />
    )
  }

  const renderProducts = () => {
    return products.map((p)=> <ProductCard key={p.id} {...p} />)
  }

  return (
    <>
      <h1>Category Lookup Page</h1>
      {renderSelect()}
      <Card.Group style={{marginTop: '25px'}}>
        {renderProducts()}
      </Card.Group>
    </>
  )
}

export default Categories