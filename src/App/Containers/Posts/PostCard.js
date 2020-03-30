import React from 'react'
import { Card, CardTitle, CardText, Button } from 'reactstrap'

const CardsModule = ({ slicedData, onDetailClick, onDeleteClick }) => {
    const renderPostCard = slicedData.map((singleDatas) => (
        <>
            <div class="container-fluid">


                {/* <br><br></br> */}
                <div className='ui'>
                    <div className='ui_box white'>
                        <div className='ui_box__inner'>
                            <h2>
                                {singleDatas.title}
                            </h2>

                            <br></br>
                            <p>{singleDatas.body}</p>
                        </div>
                        <div className='drop'>
                            <Button color="warning" onClick={(e) => onDetailClick(e, singleDatas.id)}>Details</Button>
                            <Button style={{ float: 'right' }} color="secondary" onClick={(e) => onDeleteClick(e, singleDatas.id)} > Delete</Button>
                            <div className='arrow'></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    ))
    return renderPostCard


}
export default CardsModule