import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Jumbotron, Row,
} from 'reactstrap';


const SignUpModule = ({
    validateEmail,
    valid,
    profileName, index, profilEmail, profilStreet, profilCity, onSubmitBtnClick, onChangeloginHandler

}) => {
    console.log("valid:", valid)
    return (
        <Container className="App">

            <h2>Sign In</h2>
            <Row className=" d-flex justify-content-center">

                <Col lg="6">
                    <Jumbotron style={{ backgroundColor: "#2a335573" }}>
                        <Form className="form">
                            <h1 style={{ marginLeft: '40%' }}>SignUP!!</h1>
                            <h6 style={{ marginLeft: '41%' }}>Welcome Back!!</h6>
                            <Col>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={profileName}
                                        placeholder="Name"
                                        key={index}
                                        onChange={(e) => onChangeloginHandler(e)}
                                    />
                                    <Label for="name">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={profilEmail}
                                        placeholder="Email"
                                        key={index}
                                        onChange={(e) => onChangeloginHandler(e)}
                                    />

                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                        onChange={(e) => onChangeloginHandler(e)}
                                    />
                                    <Label for="examplePassword">Re Enter Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                        onChange={(e) => onChangeloginHandler(e)}
                                    />


                                    <Label for="name">Street</Label>
                                    <Input
                                        type="text"
                                        name="street"
                                        value={profilStreet}
                                        placeholder="Street"
                                        key={index}
                                        onChange={(e) => onChangeloginHandler(e)}
                                    />
                                    <Label for="name">City</Label>
                                    <Input
                                        type="text"
                                        name="city"
                                        value={profilCity}
                                        placeholder="City"
                                        key={index}
                                        onChange={(e) => onChangeloginHandler(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Button style={{ marginLeft: '30%' }} color="primary" onClick={() => onSubmitBtnClick()}>Submit</Button>

                            <Row style={{ float: "right", marginRight: '30%' }} >
                                <Button>Cancel</Button>
                            </Row>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container >
    )
}



export default SignUpModule;


