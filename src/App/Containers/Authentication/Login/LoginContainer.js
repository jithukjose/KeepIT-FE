import React from 'react'
import LoginModule from '../Login/LoginPage'
import { Redirect } from 'react-router-dom'


class LoginContainer extends React.PureComponent {

    state = {
        isLogin: false,
        redirect: false,
        redirectFromLogin: false
    }




    onChangeloginHandler = (event) => {
        let value = event.target.value
        let fieldName = event.target.name

        this.setState({
            [fieldName]: value //this value will assign to this respective fieldname
        })
    }

    onLoginSubmitBtn = (e) => {

        this.setState({
            login: {

                email: this.state.email,
                password: this.state.password
            }

        })

        const TOKEN_KEY = 'jwt';


        fetch("http://localhost:5000/api/login", {
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
            .then(res => res.json()

            ).then(this.setState({ redirectFromLogin: true }))
            .then((result) => {
                if (result && result.error) {
                    console.log("errorrrr!!")
                }
                else {
                    localStorage.setItem(TOKEN_KEY, result.token);
                    this.setState({
                        isLogin: true
                    })
                }

            },

                (error) => {
                    console.log("error")
                }
            )
    }
    onSignupBtnClick = () => {
        this.setState({ redirect: true });
    }

    render() {
        const { redirect, redirectFromLogin } = this.state;

        if (redirect) {
            return < Redirect to="/signup" />
        }
        if (redirectFromLogin) {
            return <Redirect to="/posts" />
        }

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




