import React, { Component } from 'react'
import { Navbar } from "react-bootstrap";
import IMG_ from '../bc4099.jpg';




export default class Navi extends Component {
    render() {
        return (
            <div style={{ height: "60px" }} >
                <Navbar bg="dark" variant="dark" fixed="top" >
                    <Navbar.Brand >
                        <img src={IMG_}  alt="" title="" width="99" height="40" />
                    </Navbar.Brand>
                    <Navbar.Brand >Cows & Bulls Game</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
