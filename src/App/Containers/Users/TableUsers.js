import React from 'react'

import { Table, Input } from 'reactstrap'

const UsersTableModule = ({ userDatas, onEditClickBtn, onDeleteBtnClick, onEditChangeHandler, rowClicked, rowId, saveBtn }) => {
  const renderRows = userDatas && userDatas.map((singleDatas, index) => (

    (<tr
    >

      <td>{rowClicked && singleDatas.id === rowId ? <input defaultValue={singleDatas.name} id="Name" name="name" key={index} onChange={(e) => onEditChangeHandler(e, singleDatas.id)}></input> : singleDatas.name}</td>

      <td>{singleDatas.email}</td>

      <td>{rowClicked && singleDatas.id === rowId ? <input defaultValue={singleDatas.street} id="Name" name="street" key={index} onChange={(e) => onEditChangeHandler(e)}></input> : singleDatas.street}</td>

      <td>{rowClicked && singleDatas.id === rowId ? <input defaultValue={singleDatas.city} id="Name" name="city" key={index} onChange={(e) => onEditChangeHandler(e)}></input> : singleDatas.city}</td>

      <i style={{ paddingleft: '3em', padding: '20px', cursor: 'pointer' }}
        className={rowClicked && singleDatas.id === rowId && saveBtn && saveBtn === true ? "fas fa-check-square fa-lg text-primary" : "fas fa-edit fa-lg text-dark"} onClick={(e) => onEditClickBtn(singleDatas)}></i >

      <i style={{ cursor: 'pointer' }} className="fas fa-trash fa-lg text-danger " onClick={(e) => onDeleteBtnClick(e, singleDatas.id)}></i>
    </tr >)



  )
  )
  return (
    <>
      {/* <div class="col-xs-6 col-sm-4"> */}

      <div style={{ width: '90%', padding: '10px', margin: '0px', textAlign: 'center' }}>
        <Table striped hover >
          <thead>
            <tr>

              <th>Name</th>
              <th>Email ID</th>
              <th>Street</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody >{renderRows}</tbody>
        </Table>
      </div>

    </>

  )
}

export default UsersTableModule
