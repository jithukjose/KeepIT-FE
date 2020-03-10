import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Jumbotron, Row
} from 'reactstrap';


const LoginModule = ({
    // validateEmail,
    valid,
    onLoginSubmitBtn,
    onChangeloginHandler, onSignupBtnClick

}) => {

    return (
        <Container className="App">
            <Row style={{ paddingTop: '6rem' }} className=" d-flex justify-content-center">
                <Col lg="6">
                    <Jumbotron style={{ backgroundColor: "#2a335573" }}>
                        <Form className="form">
                            <h1 style={{ marginLeft: '40%' }}>Login!!</h1>
                            <h6 style={{ marginLeft: '41%' }}>Welcome !!</h6>
                            <Col>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="Email!!"
                                        onChange={(e) => onChangeloginHandler(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                        onChange={(e) => onChangeloginHandler(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Button color="primary" onClick={() => onLoginSubmitBtn()} >Submit</Button>
                            <Row style={{ float: "right" }} >
                                <Button onClick={() => onSignupBtnClick()}>SignUp?</Button>
                            </Row>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container >
    )
}




export default LoginModule;


