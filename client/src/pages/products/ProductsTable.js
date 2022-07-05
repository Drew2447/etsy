import React from "react";
import { Table } from "semantic-ui-react";

const ProductsTable = ({products}) => {

  return (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {products.map((p) => {
        return (
          <Table.Row key={p.id}>
            <Table.Cell>{p.description}</Table.Cell>
            <Table.Cell>{p.category}</Table.Cell>
            <Table.Cell>{p.price}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
  )
}

export default ProductsTable