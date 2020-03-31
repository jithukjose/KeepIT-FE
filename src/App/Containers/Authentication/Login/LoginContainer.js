import React from 'react'
import LoginModule from '../Login/LoginPage'
import { isLogin } from '../../../../Helper/LocalStorage'

import { NotifyError, Notify } from '../../../components/Toaster/Tosater'
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class LoginContainer extends React.PureComponent {


    state = {
        isLogin: false,
        redirect: false,
        redirectFromLogin: false,
        email: '',
        password: ''
    }

    componentDidMount() {

        const { history } = this.props
        if (isLogin()) {
            history.push('/posts')
        }
    }
    // notify = () => toast("Hello", { autoClose: false });
    onChangeloginHandler = (event) => {
        let value = event.target.value
        let fieldName = event.target.name

        this.setState({
            [fieldName]: value //this value will assign to this respective fieldname
        })


    }

    onLoginSubmitBtn = async (e) => {
        e.preventDefault()
        const error = this.checkValidation();

        if (!error) {
            console.log("SUCCESSSS")
        } else {
            this.setState({
                errors: error
            })
        }

        // Notify()

        const TOKEN_KEY = 'jwt'
        const { history } = this.props
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: 'POST',
                headers: {

                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })


            })
            const data = await response.json()

            NotifyError()
            if (data.id) {

                localStorage.setItem(TOKEN_KEY, data.token);
                localStorage.setItem('userId', data.id)
                history.push('/home')
                // NotifyError()

            }

        } catch (error) {

        }
    }


    onSignupBtnClick = (e) => {
        this.checkValidation()
        e.preventDefault()
        const { history } = this.props
        history.push('/signup')
    }


    checkValidation = () => {
        const { email, password } = this.state
        const validation = (string) => {

            const validEmailRegex =
                RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

            const isValid = validEmailRegex.test(string)

            if (isValid) {
                return true
            }
            return false

        }


        const validatePassword = (string) => {

            const validpasswordRegex = RegExp(/^(?=.*[A-Z])(?=.*\d)/);

            const isValidPassword = validpasswordRegex.test(string)

            if (isValidPassword) {
                return true
            }
            return false

        }


        let errors = undefined;

        if (!validation(email) || email === '') {
            if (!errors) errors = {}
            errors.email = "email not valid"
        }
        if ((!validatePassword(password)) || password === '') {
            if (!errors) errors = {}
            errors.password = "Password is not strong enough"
        }
        else {
            console.log("match password");
        }

        return errors

    }


    render() {

        return (
            <>
                <div>
                    <ToastContainer
                        hideProgressBar />
                </div>
                <LoginModule
                    onLoginSubmitBtn={this.onLoginSubmitBtn}
                    onChangeloginHandler={this.onChangeloginHandler}
                    onSignupBtnClick={this.onSignupBtnClick}
                    notify={this.notify}

                />
            </>
        )
    }
}

export default LoginContainer




