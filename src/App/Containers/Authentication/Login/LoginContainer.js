import React from 'react'
import LoginModule from '../Login/LoginPage'
import { isLogin } from '../../../../Helper/LocalStorage'


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

    onChangeloginHandler = (event) => {
        let value = event.target.value
        let fieldName = event.target.name

        this.setState({
            [fieldName]: value //this value will assign to this respective fieldname
        })
    }

    onLoginSubmitBtn = async (e) => {

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
            if (data) {
                localStorage.setItem(TOKEN_KEY, data.token);
                history.push('/posts')
            }
        } catch (error) {
            console.log(error)
        }
    }


    onSignupBtnClick = () => {
        const { history } = this.props
        history.push('/signup')
    }



    render() {


        return (
            <>
                <LoginModule
                    onLoginSubmitBtn={this.onLoginSubmitBtn}
                    onChangeloginHandler={this.onChangeloginHandler}
                    onSignupBtnClick={this.onSignupBtnClick}

                />

            </>
        )
    }
}

export default LoginContainer




