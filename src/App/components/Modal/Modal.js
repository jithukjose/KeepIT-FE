// import React, { useState } from 'react'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// /////////////////////////////////////////////////////////

// class ModalExample extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props)
//   }

//   render() {
//     return (

//         const ModalFunction = () =>{     <div>
//         <br />
//         <label>
//           (child) this.props.isOpen
//           <input type="text" value={this.props.isOpen} />
//         </label>

//         <Modal
//           isOpen={this.props.isModalOpen}
//           toggle={this.props.toggleModalView}
//           className={this.props.className}
//         >
//           <ModalHeader toggle={this.props.toggleModalView}>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//             mollit anim id est laborum.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.props.toggleModalView}>
//               Do Something
//             </Button>
//             <Button color="secondary" onClick={this.props.toggleModalView}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </div>

//     )
//   }
//   )}
// }

// class SampleApp extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isModalOpen: true
//     }

//     this.showModal = this.showModal.bind(this)
//     this.toggle = this.toggle.bind(this)
//   }

//   toggle() {
//     this.setState({
//       isModalOpen: !this.state.isModalOpen
//     })
//   }

//   showModal() {
//     this.setState({
//       isModalOpen: true
//     })
//   }

//   render() {
//     return (
//       <div>
//         <ModalExample isOpen={this.state.isModalOpen} toggle={this.state.isModalOpen} />

//         {/* <br />
//         <button className="btn btn-primary" onClick={this.toggle}>
//           Show Modal From Parent Component
//         </button>

//         <br /> */}
//         {/* <label>
//           (parent) this.state.isModalOpen:
//           <input type="text" value={this.state.isModalOpen} />
//         </label> */}
//       </div>
//     )
//   }
// }
// // --------------------------------------------------------------
// class ModalExample extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modal: props.initialModalState,
//             fade: true
//         };

//         this.toggle = this.toggle.bind(this);
//     }

//     toggle() {
//         this.setState({
//             modal: !this.state.modal,
//             fade: !this.state.fade

//         });
//     }

//     render() {
//         return (
//             // <div>
//             //     <Button color="danger" onClick={this.toggle}>TOGGLE</Button>
//             //     <Modal isOpen={this.state.modal} toggle={this.toggle}
//             //            fade={this.state.fade}
//             //            className={this.props.className}>
//             //         <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//             //         <ModalBody>

//             //         </ModalBody>
//             //         <ModalFooter>
//             //             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//             //             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//             //         </ModalFooter>
//             //     </Modal>
//             // </div>
//         );
//     }
// }

// export default class SampleApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     render() {
//         return (
//             <div>
//                 <ModalExample initialModalState={false} />
//             </div>
//         )
//     }
// }
