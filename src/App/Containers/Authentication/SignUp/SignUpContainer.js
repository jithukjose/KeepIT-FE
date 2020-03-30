import React from 'react'
import SignUpModule from './SignUp'
// import { Redirect } from 'react-router';
import { isLogin } from '../../../../Helper/LocalStorage';
import * as yup from 'yup'

import { NotifyError, Notify } from '../../../components/Toaster/Tosater'

// let yup = require('yup');

class SignUpContainer extends React.PureComponent {
    state = {
        redirect: false
    }

    onChangeloginHandler = (event) => {
        let value = event.target.value
        let fieldName = event.target.name

        // if (this.validator.fieldName('name')) {
        //     // booya this field is valid!
        // }

        this.setState({
            [fieldName]: value //this value will assign to this respective fieldname
        })
    }

    componentDidMount() {
        const { history } = this.props
        if (isLogin()) {
            history.push('/posts')
        }
    }

    validate = async (name, email, street, city, password) => {
        let yup = require('yup');

        let schema = await yup.object().shape({

            name: yup.string().required('Name required').min(2, 'Too Short!'),
            email: yup.string().email('Invalid email').required('Email required'),
            street: yup.string().required('Street required'),
            city: yup.string().required('City required'),
            password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.')
        })
        console.log(schema, 'helo')

        return await schema.validate(name, email, street, city, password, { abortEarly: false })
    }


    onSubmitBtnClick = async (e, personalData) => {

        e.preventDefault()
        const { name, email, street, city, password } = this.state

        const isValid = await this.validate()
        console.log(isValid, 'here')
        if (isValid) {

            let personalData = {
                name: name,
                email: email,
                street: street,
                city: city,
                password: password
            }
            console.log(personalData, 'data')
        } else {

            alert('error')
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
            alert('haha')

            if (result) {
                // const { history } = this.props
                // history.push('/login')
            }
            this.setState({ redirect: true })
            NotifyError()
        })
            .catch(function (e) {
                alert('Error submitting form!')
            })
    }

    onLoginBtnClick = (e) => {

        e.preventDefault()
        const { history } = this.props
        history.push('/login')
    }

    render() {

        const { name, email, password, city, street } = this.state


        return (
            <>
                <SignUpModule
                    onSubmitBtnClick={this.onSubmitBtnClick}
                    onChangeloginHandler={this.onChangeloginHandler}
                    onLoginBtnClick={this.onLoginBtnClick}
                    name={name}
                    email={email}
                    password={password}
                    city={city}
                    street={street}
                    notify={this.notify}


                />
            </>
        )
    }
}

export default SignUpContainer




