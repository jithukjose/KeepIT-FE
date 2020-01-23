import React from 'react'

import { Table } from 'reactstrap'

const TodoTableModule = ({ todoDatas }) => {
  const renderRows = todoDatas.map((singleDatas) => (
    <tr>
      {/* <th scope="row"></th> */}
      <td>{singleDatas.id}</td>
      <td>{singleDatas.title}</td>
      <td>{singleDatas.completed}</td>
    </tr>
  ))
  return (
    <Table dark striped hover>
      <thead>
        <tr>
          {/* <th>User ID</th> */}
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>

      <tbody>{renderRows}</tbody>
    </Table>
  )
}

export default TodoTableModule
