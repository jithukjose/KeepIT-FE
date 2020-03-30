import React, { Component } from 'react'
import HomeCardModule from './HomeCardModule'
import './home.css'


class HomeContainer extends Component {


    onProfileBtnClick = () => {
        const { history } = this.props
        history.push('/profile')
    }
    onContactBtnClick = () => {
        const { history } = this.props
        history.push('/users')
    }
    onPostsBtnClick = () => {
        const { history } = this.props
        history.push('/posts')
    }

    render() {

        return (<div> <HomeCardModule
            onProfileBtnClick={this.onProfileBtnClick}
            onContactBtnClick={this.onContactBtnClick}
            onPostsBtnClick={this.onPostsBtnClick}
        /> </div>)
    }
}

export default HomeContainer
