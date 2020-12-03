import React, { Component } from 'react'
import { Container, Col, Card, Button, Form, } from "react-bootstrap";


class Assistant extends Component {
    changeColor = (event) => {
        if (event.target.style.background === "white") {
            event.target.style.background = "green"
        } else if (event.target.style.background === "green") {
            event.target.style.background = "red"
        } else if (event.target.style.background === "red") {
            event.target.style.background = "yellow"
        } else if (event.target.style.background === "yellow") {
            event.target.style.background = "white"
        }
    }

    changeColors = (event) => {
        console.log(event.target.name)
        let situation = document.getElementById(event.target.name).style.background
        console.log(situation)
        if (situation === "white") {
            document.getElementById(event.target.name).style.background = "green"
            event.target.style.background = "white"
        } else {
            document.getElementById(event.target.name).style.background = "white"
            event.target.style.background = "green"
        }
    }

    render() {
        return (
            <div style={{ marginTop: "30px" }}>
                <Card border="success" fluid="true" >
                    <Card.Header>My asistant</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            When you are sure about a digit, click the botton bellow and make it green.
                            Or if you sure that the digit no-way exits in the number, make it red.
                            This buttons will help you to make a right guess!
                        </Card.Text>
                        <Col xs lg="1">
                        </Col>
                        <Col md="auto">
                            <Form >
                                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Form.Group >
                                        <div style={{ display: "inline-block", maxWidth: "42px" }} >
                                            <Form.Control id="number1" name="number1" type="number" min="0" max="9" size="xl" style={{ padding: "1px", margin: "1px", paddingLeft: "5px", width: "40px", background: "white", display: "inline" }} />
                                            <Button variant="outline-success" name="number1" size="lg" onClick={this.changeColors} style={{ background: "green", width: "40px" }}></Button>
                                        </div>
                                        <div style={{ display: "inline-block", width: "42px" }} >
                                            <Form.Control id="number2" name="number2" type="number" min="0" max="9" size="xl" style={{ padding: "1px", margin: "1px", paddingLeft: "5px", width: "40px", background: "white", display: "inline" }} />
                                            <Button variant="outline-success" name="number2" size="lg" onClick={this.changeColors} style={{ background: "green", width: "40px" }}></Button>
                                        </div>
                                        <div style={{ display: "inline-block", width: "42px" }} >
                                            <Form.Control id="number3" name="number3" type="number" min="0" max="9" size="xl" style={{ padding: "1px", margin: "1px", paddingLeft: "5px", width: "40px", background: "white", display: "inline" }} />
                                            <Button variant="outline-success" name="number3" size="lg" onClick={this.changeColors} style={{ background: "green", width: "40px" }}></Button>
                                        </div>
                                        <div style={{ display: "inline-block", width: "42px" }} >
                                            <Form.Control id="number4" name="number4" type="number" min="0" max="9" size="xl" style={{ padding: "1px", margin: "1px", paddingLeft: "5px", width: "40px", background: "white", display: "inline" }} />
                                            <Button variant="outline-success" name="number4" size="lg" onClick={this.changeColors} style={{ background: "green", width: "40px" }}></Button>
                                        </div>
                                    </Form.Group>
                                </Container>
                                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>0</Button>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>1</Button>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>2</Button>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>3</Button>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>4</Button>
                                </Container>
                                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>5</Button>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>6</Button>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>7</Button>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>8</Button>
                                    <Button variant="outline-success" size="lg" onClick={this.changeColor} style={{ background: "white" }}>9</Button>
                                </Container>
                            </Form>
                        </Col>
                        <Col xs lg="1">
                        </Col>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Assistant