//////////////////////////////////////////////////////////////////////
// MODAL FUNCTIONAL COMPONENT
//////////////////////////////////////////////////////////////////////

// import React from 'react'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Label, Input } from 'reactstrap'

// const ModalModule = ({
//   isModalButtonClicked,
//   addUserButtonClicked,
//   onModalSubmit,
//   onChangeHandler,
//   props,
//   profileName,
//   profilEmail,
//   profilStreet,
//   profilCity,
//   index
// }) => (
//     <Row>
//       <div>
//         <Modal isOpen={isModalButtonClicked}>
//           <ModalHeader>User Details</ModalHeader>
//           <ModalBody>
//             <Label for="name">Name</Label>
//             <Input
//               type="text"
//               name="name"
//               value={profileName}
//               placeholder="Name"
//               key={index}
//               onChange={(e) => onChangeHandler(e)}
//             />
//             <Label for="name">EmailID</Label>
//             <Input
//               type="text"
//               name="email"
//               value={profilEmail}
//               placeholder="Email"
//               key={index}
//               onChange={(e) => onChangeHandler(e)}
//             />
//             <Label for="name">Street</Label>
//             <Input
//               type="text"
//               name="street"
//               value={profilStreet}
//               placeholder="Street"
//               key={index}
//               onChange={(e) => onChangeHandler(e)}
//             />
//             <Label for="name">City</Label>
//             <Input
//               type="text"
//               name="city"
//               value={profilCity}
//               placeholder="City"
//               key={index}
//               onChange={(e) => onChangeHandler(e)}
//             />
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={onModalSubmit}>
//               Submit
//           </Button>{' '}
//             <Button color="secondary" onClick={addUserButtonClicked}>
//               Cancel
//           </Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     </Row>
//   )

// export default ModalModule


//////////////////////////////////////////////////////////////
//MODAL FUNCTIONAL COMPONENT
//////////////////////////////////////////////////////////////
// onModalSubmit = () => {
//   let personalData = {
//     name: this.state.name,
//     email: this.state.email,
//     street: this.state.street,
//     city: this.state.city
//   }

//   const TOKEN_KEY = 'jwt';
//   const token = localStorage.getItem(TOKEN_KEY)
//   console.log(token, "token")

//   const response = fetch('http://localhost:5000/api/users', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token,
//     },
//   })
// }
///////////////////////////////////////////////////////////////////////////////////////
/* <ModalModule
          addUserButtonClicked={this.addUserButtonClick}
          isModalButtonClicked={isModalButtonClicked}
          onModalSubmit={this.onModalSubmit}
          onChangeHandler={this.onChangeHandler}
        ></ModalModule> */
///////////////////////////////////////////////////////////////////////////////////////////    
/* <Button color="primary" style={{}} onClick={this.addUserButtonClick}>
   Add User
 </Button> */