import React, { Component } from 'react'
import ProfileModule from '../Profile/ProfileTable'

class ProfileContainer extends Component {
  state = {}

  render() {
    const { filteredPostResult } = this.state

    return (
      <>
        searchHandler={this.SearchHandler}
        onSearchBtnClick={this.onSearchBtnClick}
        keyPressHandler={this.KeyPressHandler}
        onScreenEnterKey={this.OnScreenEnterKey}> slicedData={filteredPostResult} onDeleteClick=
        {this.OnDeleteClick}><ProfileModule></ProfileModule>
      </>
    )
  }
}

export default ProfileContainer
