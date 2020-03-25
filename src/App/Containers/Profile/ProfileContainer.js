import React, { Component } from 'react'
import ProfileModule from '../Profile/ProfileTable'
// import moment from 'moment'

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
    //disable read only mode on button click
    onEditProfileBtn = () => {
        this.setState({
            readOnlyMode: false,
        })
    }

    onSubmitProfileBtn = async (event) => {
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
        fetchProfileData()
        const { name, street, city } = userProfileData

        this.setState({
            name,
            street, city
        })
    }

    render() {

        const { name, street, city, readOnlyMode } = this.state
        return (
            <ProfileModule
                name={name}
                street={street}
                city={city}
                userProfileData={this.props.userProfileData}
                readOnlyMode={readOnlyMode}
                onEditProfileBtn={this.onEditProfileBtn}
                onEditChangeHandler={this.onEditChangeHandler}
                onSubmitProfileBtn={this.onSubmitProfileBtn}

            />
        )
    }
}

export default ProfileContainer
