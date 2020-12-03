import React, { Component } from 'react'
import { Container, Table  } from "react-bootstrap";


export default class RightSideTable extends Component {
    render() {
        return (
            <Container>
                <h3>History of your guesses</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Try</th>
                            <th>Number</th>
                            <th>Bulls(+)</th>
                            <th>Cows(-)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.numberList.map((number,i) => (
                            <tr key={number} >
                                <td>{i+1}</td>
                                <td>{number}</td>
                                <td>{this.props.bullsAndCows[i][0]}</td>
                                <td>{this.props.bullsAndCows[i][1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }
}
