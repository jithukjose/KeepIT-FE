import React from 'react'

import { Table, Input } from 'reactstrap'

const UsersTableModule = ({ userDatas, onEditClickBtn, onDeleteBtnClick, onEditChangeHandler, rowClicked, rowId }) => {
  const renderRows = userDatas && userDatas.map((singleDatas, index) => (

    (<tr
    >
      <td>{singleDatas.id}</td>
      <td>{rowClicked && singleDatas.id === rowId ? <input value={singleDatas.name} id="Name" name="name" key={index} onChange={(e) => onEditChangeHandler(e, singleDatas.id)}></input> : singleDatas.name}</td>

      <td>{singleDatas.email}</td>

      <td>{rowClicked && singleDatas.id === rowId ? <input value={singleDatas.street} id="Name" name="name" key={index} onChange={(e) => onEditChangeHandler(e)}></input> : singleDatas.street}</td>

      <td>{rowClicked && singleDatas.id === rowId ? <input value={singleDatas.city} id="Name" name="name" key={index} onChange={(e) => onEditChangeHandler(e)}></input> : singleDatas.city}</td>

      <i style={{ paddingleft: '3em', padding: '20px', cursor: 'pointer' }} class="fas fa-edit" onClick={(e) => onEditClickBtn(singleDatas)}></i>

      <i style={{ cursor: 'pointer' }} class="fas fa-trash" onClick={(e) => onDeleteBtnClick(e, singleDatas.id)}></i>
    </tr >)

  )
  )
  return (
    <div style={{ width: '90%', padding: '10px', margin: '0px' }}>
      <Table dark striped hover >
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Street</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody >{renderRows}</tbody>
      </Table>
    </div>

  )
}

export default UsersTableModule
