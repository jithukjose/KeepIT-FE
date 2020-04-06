import React from 'react'
import SignUpModule from './SignUp'
// import { Redirect } from 'react-router';
import { isLogin } from '../../../../Helper/LocalStorage';
import * as yup from 'yup'

import { NotifyError, Notifysign } from '../../../components/Toaster/Tosater'

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

    // validate = async () => {

    //     let yup = require('yup');

    //     let schema = yup.object().shape({

    //         name: yup.string().required('Name required').min(2, 'Too Short!'),
    //         email: yup.string().email('Invalid email').required('Email required'),
    //         street: yup.string().required('Street required'),
    //         city: yup.string().required('City required'),
    //         password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.')
    //     })
    //     console.log(this.state.name, 'namew')
    //     let myData = {
    //         name: this.state.name,
    //         email: this.state.email,
    //         password: this.state.password,
    //         city: this.state.city,
    //         street: this.state.street

    //     }


    //     console.log(this.mydata, 'helo')

    //     await schema.isValid({
    //         name: this.state.name,
    //         email: this.state.email,
    //         password: this.state.password,
    //         city: this.state.city,
    //         street: this.state.street
    //     }).then(function (valid) {
    //         console.log(valid, 'error')

    //         if (valid) {
    //             fetch('http://localhost:5000/api/signup', {
    //                 method: 'POST',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json'

    //                 },
    //                 body: JSON.stringify(myData)
    //             })
    //             const { history } = this.props
    //             history.push('/login')

    //         }
    //         else (function (error)) {
    //             console.log(error, 'error')
    //         }
    //     }

    //     ).catch(function (error) {
    //         console.log(error, 'new')
    //     })

    //     // const errorData = await schema.validate(myData, { abortEarly: false })
    //     // console.log(errorData, 'datas')
    //     // console.log(errorData.length, 'length')


    //     // if (errorData.length === 0) {

    //     //     fetch('http://localhost:5000/api/signup', {
    //     //         method: 'POST',
    //     //         headers: {
    //     //             Accept: 'application/json',
    //     //             'Content-Type': 'application/json'

    //     //         },
    //     //         body: JSON.stringify(myData)
    //     //     })
    //     //     const { history } = this.props
    //     //     history.push('/login')

    //     // }
    //     // else {
    //     //     console.log(errorData, 'error')
    //     // }


    // }


    onSubmitBtnClick = async (e, myData) => {

        e.preventDefault()
        const { name, email, street, city, password } = this.state

        // this.validate()

        // console.log(isValid, 'here')
        // if (isValid) {

        let personalData = {
            name: name,
            email: email,
            street: street,
            city: city,
            password: password

            // console.log(personalData, 'data')
        }

        fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(personalData)


        })
            .then((result) => {


                if (result) {
                    const { history } = this.props
                    history.push('/login')
                    Notifysign()
                }


            })
            .catch(function (e) {
                alert('Error submitting form!')

            })
        // NotifyError()
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




