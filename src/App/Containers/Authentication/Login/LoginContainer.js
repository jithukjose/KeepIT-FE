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
        redirectFromLogin: false
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
        e.preventDefault()
        const { history } = this.props
        history.push('/signup')
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




