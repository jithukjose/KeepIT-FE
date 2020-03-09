import React from 'react'
import SignUpModule from './SignUp'
import { Redirect } from 'react-router';



class SignUpContainer extends React.PureComponent {
    state = {
        redirect: false
    }

    onChangeloginHandler = (event) => {
        let value = event.target.value
        let fieldName = event.target.name

        this.setState({
            [fieldName]: value //this value will assign to this respective fieldname
        })
    }

    onSubmitBtnClick = () => {


        let personalData = {
            name: this.state.name,
            email: this.state.email,
            street: this.state.street,
            city: this.state.city,
            password: this.state.password
        }

        fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(personalData)


        }
        ).then((result) => {
            this.setState({ redirect: true })

        })
            .catch(function (e) {
                alert('Error submitting form!')
            })
    }

    render() {

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/login' />
        }


        return (
            <>
                <SignUpModule
                    onSubmitBtnClick={this.onSubmitBtnClick}
                    onChangeloginHandler={this.onChangeloginHandler}

                ></SignUpModule>
            </>
        )
    }
}

export default SignUpContainer




