import React from 'react'
import SignUpModule from './SignUp'
import { Redirect } from 'react-router';
import { isLogin } from '../../../../Helper/LocalStorage';




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

    onLoginBtnClick = (e) => {

        e.preventDefault()
        const { history } = this.props
        history.push('/login')
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
                    onLoginBtnClick={this.onLoginBtnClick}

                />
            </>
        )
    }
}

export default SignUpContainer




