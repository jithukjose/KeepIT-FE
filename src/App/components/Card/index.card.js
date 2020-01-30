import React from 'react'

import { Card, CardTitle, CardText, Row, Button, Col } from 'reactstrap'

const CardModule = ({ slicedData, onModalClick, onDeleteClick }) => {
  const renderPostCard = slicedData.map((singleDatas) => (
    <Col xs="6" key={singleDatas.id}>
      <Card body>
        <CardTitle>{singleDatas.title}</CardTitle>
        <CardText>{singleDatas.body}</CardText>
        <Button
          style={{ float: 'left', margin: '10px' }}
          color="secondary"
          // onClick={() => onModalClick()}
        >
          Details
        </Button>
        <Button
          color="danger"
          style={{ float: 'left', margin: '10px' }}
          onClick={(e) => onDeleteClick(e, singleDatas.id)}
        >
          Delete
        </Button>
      </Card>
    </Col>
  ))

  return <Row>{renderPostCard}</Row>
}

export default CardModule
