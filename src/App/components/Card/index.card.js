import React from 'react'
// import './App.css'

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

// const CardModule = (postData) => {
//   console.log(postData, 'data')

const CardModule = ({ postData }) => {
  const singleData = postData.map((singleDatas) => (
    <Row>
      <Col sm="3">
        <Card body>
          <CardTitle>{singleDatas.title}</CardTitle>
          <CardText>{singleDatas.body}</CardText>
          <Button>Details</Button>
        </Card>
      </Col>
    </Row>
  ))

  return <div style={{ display: 'inline-block' }}>{singleData}</div>
}

export default CardModule
