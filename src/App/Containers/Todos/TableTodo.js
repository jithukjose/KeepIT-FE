import React from 'react'

import { Table } from 'reactstrap'

const TodoTableModule = ({ slicedData }) => {
  console.log(slicedData)
  const renderRows = slicedData.map((todo) => (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed}</td>
    </tr>
  ))
  return (
    <div style={{ width: '90%', padding: '10px', margin: '20px' }}>
      <Table dark striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>{renderRows}</tbody>
      </Table>
    </div>
  )
}

export default TodoTableModule
