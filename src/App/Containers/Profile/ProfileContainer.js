import React, { Component } from 'react'
import ProfileModule from '../Profile/ProfileTable'

import ProfileModalModule from './profileModalModule'
import { Notify } from '../../components/Toaster/Tosater'
import { ToastContainer } from 'react-toastify';

class ProfileContainer extends Component {
    state = {
        readOnlyMode: true,
        name: '',
        street: '',
        city: '',

    }

    componentDidMount() {
        const { fetchProfileData } = this.props
        fetchProfileData()
    }


    componentWillReceiveProps(nextProps) {
        const { userProfileData } = this.props
        if (nextProps.userProfileData !== userProfileData) {
            const { name, street, city } = nextProps.userProfileData
            this.setState({
                name,
                street, city
            })
        }
    }

    onEditChangeHandler = (event) => {
        let value = event.target.value
        let fieldName = event.target.name
        this.setState({
            [fieldName]: value //this value will assign to this respective fieldname
        })
    }
    onModalClick = () => {
        this.setState((prevState) => ({
            isSuccessModalButton: !prevState.isSuccessModalButton,

        }))
    }
    //disable read only mode on button click
    onEditProfileBtn = () => {
        this.onModalClick()
        this.setState({
            readOnlyMode: false,
        })
    }

    onSubmitProfileBtn = async (event) => {
        this.onModalClick()
        const { postProfileData, fetchProfileData, userProfileData } = this.props
        // event.preventDefault();
        const changedData = {
            name: this.state.name,
            street: this.state.street,
            city: this.state.city,
            email: null
        }


        await postProfileData(changedData)
        this.setState({
            readOnlyMode: true,
        })
        Notify()
        fetchProfileData()
        const { name, street, city } = userProfileData

        this.setState({
            name,
            street, city
        })
    }

    render() {

        const { name, street, city, readOnlyMode, isSuccessModalButton } = this.state
        return (
            <>
                <ProfileModule
                    name={name}
                    street={street}
                    city={city}
                    userProfileData={this.props.userProfileData}
                    readOnlyMode={readOnlyMode}
                    onEditProfileBtn={this.onEditProfileBtn}
                />
                <ProfileModalModule
                    isSuccessModalButton={isSuccessModalButton}
                    onModalClick={this.onEditProfileBtn}
                    userProfileData={this.props.userProfileData}
                    onEditChangeHandler={this.onEditChangeHandler}
                    onSubmitProfileBtn={this.onSubmitProfileBtn}
                />
                <div>
                    <ToastContainer
                        hideProgressBar />
                </div>
            </>
        )
    }
}

export default ProfileContainer
