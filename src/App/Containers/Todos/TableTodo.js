import React from 'react'

import { Table } from 'reactstrap'

const TodoTableModule = ({ slicedData }) => {
  const renderRows = slicedData.map((singleDatas) => (
    <tr>
      <td>{singleDatas.id}</td>
      <td>{singleDatas.title}</td>
      <td>{singleDatas.completed}</td>
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
