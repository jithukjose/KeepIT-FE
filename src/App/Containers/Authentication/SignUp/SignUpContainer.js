import React from 'react'

import SignUpModule from './SignUp'


class SignUpContainer extends React.PureComponent {
    // state = {
    // }

    onModalSubmit = () => {
        let personalData = {
            name: this.state.name,
            email: this.state.email,
            street: this.state.street,
            city: this.state.city
        }

        fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .catch(function (e) {
                alert('Error submitting form!')
            })
    }

    //    return fetch('https://mywebsite.com/endpoint/', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   })
    // })


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
                <SignUpModule
                    validateEmail={this.validateEmail}
                    valid={this.valid}
                ></SignUpModule>
            </>
        )
    }
}

export default SignUpContainer




