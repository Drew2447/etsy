import { Card } from "semantic-ui-react"

const ProductCard = ({description}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{description}</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default ProductCard