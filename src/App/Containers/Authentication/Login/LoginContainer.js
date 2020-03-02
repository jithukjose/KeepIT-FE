import React, { Component } from 'react'

import LoginModule from '../Login/LoginPage'


class LoginContainer extends React.PureComponent {
    state = {
    }

    validateEmail = (e) => {

        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
            let valid = this.state.validate.emailState === 'has-success'
            console.log(valid, 'here')

        } else {
            validate.emailState = 'has-danger'
            let invalid = this.state.validate.emailState === 'has-danger'
        }
        this.setState({ validate })
    }

    render() {
        // const { filteredPostResult, isModalButtonClicked } = this.state
        // const { postDatas } = this.props
        // const { valid }

        return (
            <>
                <LoginModule
                    validateEmail={this.validateEmail}
                    valid={this.valid}
                ></LoginModule>
            </>
        )
    }
}

export default LoginContainer




