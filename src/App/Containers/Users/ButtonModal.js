import React from 'react'

const ButtonModule = ({ onAddBtnClick }) => {

    return (
        <div class="text-center text-large" style={{ float: 'left', paddingTop: '150px', paddingRight: '80px' }}>
            <a class="social-button" target="_blank" style={{ cursor: 'pointer' }} onClick={(e) => onAddBtnClick(e)}>
                <span style={{ fontSize: '12px', fontWeight: 'bolder', color: 'black' }}>Add Contacts</span>
            </a>
        </div>
    )

}
export default ButtonModule

