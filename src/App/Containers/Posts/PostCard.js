import React from 'react'
import { Card, CardTitle, CardText, Button } from 'reactstrap'

const CardsModule = ({ slicedData, onDetailClick, onDeleteClick, }) => {
    const renderPostCard = slicedData.length ? slicedData.map((singleDatas) => (
        <>
            <div class="container-fluid">

                <div style={{ paddingLeft: '70px', float: 'left', width: '25%', padding: '0 10px' }}>

                    <div className='ui'>

                        <div className='ui_box white'>
                            <div className='ui_box__inner'>
                                <h2 style={{ fontWeight: "bold" }}>
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
            </div>

        </>
    )) :
        <img className="d-block img-fluid" style={{ height: '300px', cursor: 'pointer', paddingLeft: '30%' }} src="https://i1.wp.com/www.teleanalysis.com/wp-content/uploads/2018/08/jio-data-consumption-issue-e1533921963505.png?fit=475%2C288&ssl=1" alt="First slide" />


    return renderPostCard


}
export default CardsModule