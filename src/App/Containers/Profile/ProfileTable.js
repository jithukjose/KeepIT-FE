import React from 'react'
import { Container } from 'reactstrap'
// import DateSelector from '../../components/DatePicker/index.datepicker'
// import country from '../../../Helper/Country'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

const ProfileModule = ({
  onEditChangeHandler, index, userProfileData, readOnlyMode, onEditProfileBtn, name, street, city, onSubmitProfileBtn }) => {
  console.log('street', street)
  return (
    <>
      <Container style={{ paddingTop: '6rem' }}  >
        <div className="container" >
          <div className="row">
            <div className="col-md-3 ">
              <div className="list-group ">
                <button className="list-group-item list-group-item-action active">Dashboard</button>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">

                    <div className="col-md-12">
                      <h3>Your Profile
                      <div class="btn btn-large btn btn-warning " style={{ float: 'right' }} onClick={(e) => onEditProfileBtn(e)} >
                          <i class="fas fa-user-edit" ></i>
                        </div>
                      </h3>
                      <div class="container">
                      </div>
                      <hr />

                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <form>


                        <div className="form-group row">
                          <label for="Name" className="col-4 col-form-label">Name </label>
                          <div className="col-8">
                            <input id="Name" name="name"
                              placeholder="Name" className="form-control here" type="text" onChange={(e) => onEditChangeHandler(e)}
                              key={index}
                              value={name}
                              disabled={readOnlyMode}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label for="email" className="col-4 col-form-label">Email*</label>
                          <div className="col-8">
                            <input id="email" name="email" placeholder="Email" className="form-control here" value={userProfileData.email} required="required" type="text" onChange={(e) => onEditChangeHandler(e)}
                              key={index}
                              disabled={true}
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label for="select" className="col-4 col-form-label">Display Name public as</label>
                          <div className="col-8">
                            <select id="select" name="select" className="custom-select">
                              <option value="admin">Admin</option>
                            </select>
                          </div>
                        </div>


                        <div className="form-group row">
                          <label for="website" className="col-4 col-form-label">Street</label>
                          <div className="col-8">
                            <input id="Street" name="street" placeholder="Street" className="form-control here" type="text" onChange={(e) => onEditChangeHandler(e)}
                              key={index}
                              disabled={readOnlyMode}
                              value={street} />



                          </div>

                        </div>
                        <div className="form-group row">
                          <label for="City" className="col-4 col-form-label">City</label>
                          <div className="col-8">
                            <input id="City" name="city" placeholder="City" className="form-control here" type="text" onChange={(e) => onEditChangeHandler(e)}
                              key={index}
                              disabled={readOnlyMode}
                              value={city} />
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="offset-4 col-8">
                            <button name="submit" type="submit" onClick={(e) => onSubmitProfileBtn(e)} className="btn btn-primary" disabled={readOnlyMode} >Update My Profile</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}

export default ProfileModule
