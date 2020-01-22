import React from 'react'
// import './App.css'

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

const CardModule = () => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Row>
        <Col sm="4">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>

        <Col sm="4">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CardModule
