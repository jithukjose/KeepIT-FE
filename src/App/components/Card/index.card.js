import React from 'react'

import { Card, CardTitle, CardText, Button } from 'reactstrap'
import classes from './card.module.css'

const CardModule = ({ slicedData, onDetailClick, onDeleteClick }) => {
  const renderPostCard = slicedData.map((singleDatas) => (
    <Card body className={classes.card}>
      <CardTitle>{singleDatas.title}</CardTitle>
      <CardText>{singleDatas.body}</CardText>
      <div className={classes.buttonblock}>
        <Button
          color="secondary"
          onClick={(e) => onDetailClick(e, singleDatas.id)}
        >
          Details
        </Button>
        <Button
          color="danger"
          onClick={(e) => onDeleteClick(e, singleDatas.id)}
        >
          Delete
        </Button>
      </div>
    </Card>
    // </Col>
  ))

  return renderPostCard
}

export default CardModule
