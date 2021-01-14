import React, { Component } from 'react'
import Navi from "./components/Navi";
import RightSideTable from "./components/RightSideTable";
import Assistant from "./components/Assistant";
import { Container, Row, Col, Card, Button, Form, } from "react-bootstrap";



class App extends Component {
  state = {
    genNumber1: null,
    genNumber2: null,
    genNumber3: null,
    genNumber4: null,
    number1: "",
    number2: "",
    number3: "",
    number4: "",
    error: "",
    numberList: [],
    bullsAndCows: [],
  }

  componentDidMount() {
    window.onload = () => {
      let randomNumber1 = Math.floor(Math.random() * 9) + 1
      let randomNumber2 = Math.floor(Math.random() * 10)
      while (randomNumber1 === randomNumber2) {
        randomNumber2 = Math.floor(Math.random() * 10)
      }
      let randomNumber3 = Math.floor(Math.random() * 10)
      while (randomNumber1 === randomNumber3 || randomNumber2 === randomNumber3) {
        randomNumber3 = Math.floor(Math.random() * 10)
      }
      let randomNumber4 = Math.floor(Math.random() * 10)
      while (randomNumber1 === randomNumber4 || randomNumber2 === randomNumber4 || randomNumber3 === randomNumber4) {
        randomNumber4 = Math.floor(Math.random() * 10)
      }
      this.setState({ genNumber1: randomNumber1 })
      this.setState({ genNumber2: randomNumber2 })
      this.setState({ genNumber3: randomNumber3 })
      this.setState({ genNumber4: randomNumber4 })
    }
  }

  cheatMe = () => {
    var cheat = ((this.state.genNumber1 * 1000) + (this.state.genNumber2 * 100) + (this.state.genNumber3 * 10) + this.state.genNumber4)
    if (document.getElementById("cheatbutton").innerHTML === cheat) {
      document.getElementById("cheatbutton").innerHTML = "Click to see number TEST"
    } else {
      document.getElementById("cheatbutton").innerHTML = cheat
    }
  }

  firstControlOfNumber = () => {
    let fourDigits = ((this.state.number1 * 1000) + (this.state.number2 * 100) + (this.state.number3 * 10) + this.state.number4)
    let list = this.state.numberList

    if (this.state.number1 === 0) {
      var error1 = "First number can not be '0'. Please choose a new number!"
      this.setState({ error: error1 })
    } else if (this.state.number1 === "" || this.state.number2 === "" || this.state.number3 === "" || this.state.number4 === "") {
      var error2 = "It must be a 4 Digit Number.Please choose a true number!"
      this.setState({ error: error2 })
    } else if (this.state.number1 === this.state.number2 || this.state.number1 === this.state.number3
      || this.state.number1 === this.state.number4 || this.state.number2 === this.state.number3 ||
      this.state.number2 === this.state.number4 || this.state.number3 === this.state.number4) {
      var error3 = "All digits must be different.Please choose a true number!"
      this.setState({ error: error3 })
    } else if (list.includes(fourDigits)) {
      var error4 = "You have chosen this number before.Please choose a new number!"
      this.setState({ error: error4 })
    }
    else {
      var noError = " "
      this.setState({ error: noError })
    }
  }

  numberChangeHandler = (event) => {
    let name = event.target.name
    let value = Number(event.target.value)
    this.setState({ [name]: value }, this.firstControlOfNumber)
  }

  handleClick = (event) => {
    let fourDigits = ((this.state.number1 * 1000) + (this.state.number2 * 100) + (this.state.number3 * 10) + this.state.number4)
    let list = this.state.numberList
    list.push(fourDigits)

    if (list.includes(fourDigits)) {
      var error4 = "You have chosen this number before. New number please!"
      this.setState({ error: error4 })
    }
    else {
      var noError = " "
      this.setState({ error: noError, numberList: list })
    }
    this.checkNumberWithList()
  }


  checkNumberWithList = () => {
    let cowsH = 0
    let bullsH = 0

    if (this.state.number1 === this.state.genNumber1) {
      bullsH += 1
    }
    if (this.state.number2 === this.state.genNumber2) {
      bullsH += 1
    }
    if (this.state.number3 === this.state.genNumber3) {
      bullsH += 1
    }
    if (this.state.number4 === this.state.genNumber4) {
      bullsH += 1
    }
    if (bullsH === 4) {
      var error5 = "Congratulations! Finished!"
      document.getElementById("deletedend1").innerHTML = "Congratulations! Your guess is true. You knew the number at " + (this.state.bullsAndCows.length + 1) + ". try !"
      document.getElementById("deletedend").innerHTML = "It was funny!"

      this.setState({ error: error5 })
    }
    if (this.state.number1 === this.state.genNumber2 || this.state.number1 === this.state.genNumber3 || this.state.number1 === this.state.genNumber4) {
      cowsH += 1
    }
    if (this.state.number2 === this.state.genNumber1 || this.state.number2 === this.state.genNumber3 || this.state.number2 === this.state.genNumber4) {
      cowsH += 1
    }
    if (this.state.number3 === this.state.genNumber1 || this.state.number3 === this.state.genNumber2 || this.state.number3 === this.state.genNumber4) {
      cowsH += 1
    }
    if (this.state.number4 === this.state.genNumber1 || this.state.number4 === this.state.genNumber2 || this.state.number4 === this.state.genNumber3) {
      cowsH += 1
    }

    var bullsAndCowsH = [bullsH, cowsH]
    var newBullsAndCows = this.state.bullsAndCows
    newBullsAndCows.push(bullsAndCowsH)
    this.setState({ bullsAndCows: newBullsAndCows }, console.log("bullsAndCows: " + this.state.bullsAndCows))
  }


  render() {
    return (
      <Container fluid style={{ margin: "0px", marginTop: "50px", background: "#a2b9bc", height: "100vh" }}>
        <Navi />
        <Container>
          <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:"20px", fontWeight:"bold", height: "40px" }}>***Cows & Bulls Game***</Row>
          <Row> 
            <Col >
              <Container>
                <Row >
                  <Card border="success" style={{ width: "470px", minHeight: "420px", background: "#d5e1df" }} >
                    <Card.Header>
                      Make a guess
                  {/* -
                  <Button id="cheatbutton" onClick={this.cheatMe} variant="outline-danger" size="sm" right >Click to see number TEST</Button> */}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title id="deletedend1" style={{ height: "55px" }}> {this.state.error === "" || this.state.error === " " ? "Wellcome to Cows & Bulls game. Lets play !" : this.state.error} </Card.Title>
                      <Card.Text id="deletedend" style={{ color: "red", height: "20px" }} >
                        Please choose your 4 digit number and push the button below!
                      </Card.Text>
                      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Form style={{ position: "absolute", bottom: "70px" }}>
                          <Form.Group controlId="exampleForm.SelectCustomSizeLg"  >
                            <Form.Control name="number1" onChange={this.numberChangeHandler} type="number" min="0" max="9" size="sm" style={{ width: "40px", display: "inline", padding: "1px", margin: "1px", paddingLeft: "5px", background: "#deeaee" }} />
                            <Form.Control name="number2" onChange={this.numberChangeHandler} type="number" min="0" max="9" size="sm" style={{ width: "40px", display: "inline", padding: "1px", margin: "1px", paddingLeft: "5px", background: "#deeaee" }} />
                            <Form.Control name="number3" onChange={this.numberChangeHandler} type="number" min="0" max="9" size="sm" style={{ width: "40px", display: "inline", padding: "1px", margin: "1px", paddingLeft: "5px", background: "#deeaee" }} />
                            <Form.Control name="number4" onChange={this.numberChangeHandler} type="number" min="0" max="9" size="sm" style={{ width: "40px", display: "inline", padding: "1px", margin: "1px", paddingLeft: "5px", background: "#deeaee" }} />
                          </Form.Group>
                        </Form>
                      </Container>
                      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <Button style={{ position: "absolute", bottom: "20px", left: "0px", }} onClick={this.handleClick} disabled={this.state.error !== " " || this.state.error === "Congratulations! Finished!" ? true : false} variant="outline-success" size="lg" block>My number is:  {this.state.number1}{this.state.number2}{this.state.number3}{this.state.number4} </Button>
                      </Container>

                    </Card.Body>
                  </Card>
                </Row>
                <Row>
                  <RightSideTable numberList={this.state.numberList} bullsAndCows={this.state.bullsAndCows} />
                </Row>
              </Container>
            </Col>
            <Col >
              <Assistant />
            </Col>
          </Row>
        </Container>
      </Container >
    )
  }
}

export default App