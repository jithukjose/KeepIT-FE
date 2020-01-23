import React from 'react'

import { Table } from 'reactstrap'

const UsersTableModule = ({ userDatas }) => {
  const renderRows = userDatas.map((singleDatas) => (
    <tr>
      <td>{singleDatas.id}</td>
      <td>{singleDatas.name}</td>
      <td>{singleDatas.email}</td>
      <td>{singleDatas.address.city}</td>
    </tr>
  ))
  return (
    <Table dark striped hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Email ID</th>
          <th>City</th>
        </tr>
      </thead>

      <tbody>{renderRows}</tbody>
    </Table>
  )
}

export default UsersTableModule
