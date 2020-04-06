import React from 'react'
import './profileModule.css'

const ProfileModule = ({
  userProfileData, onEditProfileBtn, }) => {

  return (
    <>
      <aside class="profile-card">
        <header>
          <i class="fas fa-edit fa-lg text-dark" style={{ float: 'right', cursor: 'pointer' }} onClick={(e) => onEditProfileBtn(e)}></i>
          <a >

            <img src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png" />

          </a>

          {/* <!-- the username --> */}
          <h1> {userProfileData.name}</h1>
          <h2>{userProfileData.email}</h2>

        </header>
        <div class="profile-bio">

          <h4>Street:{userProfileData.street}</h4>
          <h4>City:{userProfileData.city}</h4>
        </div>

      </aside>





    </>
  )
}

export default ProfileModule
