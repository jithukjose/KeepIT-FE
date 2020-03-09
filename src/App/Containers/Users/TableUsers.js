import React from 'react'

import { Table } from 'reactstrap'

const UsersTableModule = ({ userDatas }) => {
  const renderRows = userDatas && userDatas.map((singleDatas) => (
    <tr>
      <td>{singleDatas.id}</td>
      <td>{singleDatas.name}</td>
      <td>{singleDatas.email}</td>
      <td>{singleDatas.street}</td>
      <td>{singleDatas.city}</td>
    </tr>
  ))
  return (
    <div style={{ width: '90%', padding: '10px', margin: '20px' }}>
      <Table dark striped hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Street</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>{renderRows}</tbody>
      </Table>
    </div>

  )
}

export default UsersTableModule
