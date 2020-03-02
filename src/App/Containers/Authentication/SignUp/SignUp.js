import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Jumbotron, Row, FormFeedback
} from 'reactstrap';


const SignUpModule = ({
    validateEmail,
    valid

}) => {
    console.log("valid:", valid)
    return (
        <Container className="App">

            <h2>Sign In</h2>
            <Row className=" d-flex justify-content-center">

                <Col lg="6">
                    <Jumbotron style={{ backgroundColor: "#2a335573" }}>
                        <Form className="form">
                            <h1 style={{ marginLeft: '40%' }}>SignUp!!</h1>
                            <h6 style={{ marginLeft: '41%' }}>Welcome !!</h6>
                            <Col>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="Email!!"

                                    />
                                    <FormFeedback
                                        valid>
                                        That's a tasty looking email you've got there.
                                  </FormFeedback>
                                    <FormFeedback invalid>
                                        Uh oh! Looks like there is an issue with your email. Please input a correct email.
                                     </FormFeedback>
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
                                    />
                                </FormGroup>
                            </Col>
                            <Button color="primary" onChange={(e) => validateEmail(e)}>Submit</Button>
                            <Row style={{ float: "right" }} >
                                <Button>SignUp?</Button>
                            </Row>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container >
    )
}



export default SignUpModule;


