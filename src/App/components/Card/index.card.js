import React from 'react'

import { Card, CardTitle, CardText, Row } from 'reactstrap'
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const CardModule = ({ slicedData }) => {
  // const {
  //   buttonLabel,
  //   className,
  // }

  //  const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  return slicedData.map((singleDatas) => (
    <div style={{ float: 'left', width: '45%', padding: '20px', margin: '10px' }}>
      <Row>
        {/* <Col sm="3"> */}
        <Card body>
          <CardTitle>{singleDatas.title}</CardTitle>
          <CardText>{singleDatas.body}</CardText>
          {/* <Button onClick={() => onDetailBtnClick()}>Details</Button> */}
        </Card>
        {/* </Col> */}
      </Row>
    </div>
  ))
}
// onDetailBtnClick = () => {
//   <div>
//     <Button color="danger" onClick={toggle}>
//       {buttonLabel}
//     </Button>
//     <Modal isOpen={modal} toggle={toggle} className={className}>
//       <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//       <ModalBody>{singleDatas.body}</ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={toggle}>
//           Do Something
//         </Button>{' '}
//         <Button color="secondary" onClick={toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>
//   </div>

export default CardModule
