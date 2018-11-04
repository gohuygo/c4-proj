import React, { Component } from 'react';
import { Card, Icon, Button, Segment, Container, Table, Grid, Header,  Menu, Divider, Message } from 'semantic-ui-react'

class IndividualShow extends Component {
  renderButtons(){
    return(
      <div className='ui two buttons'>
        <Button basic color='green'>
          Sell
        </Button>
        <Button basic color='red'>
          Gift
        </Button>
      </div>
    )
  }

  render() {
    return(
      <Container>
        <br />
        <Card.Group>
          <Card
            header='City of Berkeley'
            meta='Municipal Bond'
            description='1000 Tokens'
            extra={this.renderButtons()}
          />

          <Card
            header='City of San Jose'
            meta='Municipal Bond'
            description='52 Tokens'
            extra={this.renderButtons()}
          />

          <Card
            header='City of San Francisco'
            meta='Municipal Bond'
            description='86 Tokens'
            extra={this.renderButtons()}
          />

          <Card
            header='City of Napa'
            meta='Municipal Bond'
            description='135 Tokens'
            extra={this.renderButtons()}
          />

          <Card
            header='City of Los Angeles'
            meta='Municipal Bond'
            description='999 Tokens'
            extra={this.renderButtons()}
          />
        </Card.Group>


        <Divider section />

        <Header as='h2'>Performance Dividends</Header>
        <Table attached>
          <Table.Header>
            <Table.HeaderCell>Bond Name</Table.HeaderCell>
            <Table.HeaderCell>Dividend Date</Table.HeaderCell>
            <Table.HeaderCell>Tokens</Table.HeaderCell>
            <Table.HeaderCell>Withdraw Ether</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Fremont School </Table.Cell>
              <Table.Cell>6/30/2019</Table.Cell>
              <Table.Cell>100</Table.Cell>
              <Table.Cell>
                  <a href="https://www.facebook.com/Muniverse"> Withdraw 10 Eth </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>San Francisco Bridge</Table.Cell>
              <Table.Cell>12/30/2018</Table.Cell>
              <Table.Cell>30</Table.Cell>
              <Table.Cell>
                  <a href="https://www.facebook.com/Muniverse"> Withdraw 10 Eth </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>Carolina Parks </Table.Cell>
              <Table.Cell>3/29/2019</Table.Cell>
              <Table.Cell>120</Table.Cell>
              <Table.Cell>0 Eth (alread withdrawn)</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Divider section />

        <Header as='h2'>Mature Bonds</Header>
        <Table attached>
          <Table.Header>
            <Table.HeaderCell>Bond Name</Table.HeaderCell>
            <Table.HeaderCell>Maturity Date</Table.HeaderCell>
            <Table.HeaderCell>Tokens</Table.HeaderCell>
            <Table.HeaderCell>Withdraw Ether</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Berkeley Arts center </Table.Cell>
              <Table.Cell>10/30/2018</Table.Cell>
              <Table.Cell>23000</Table.Cell>
              <Table.Cell>
                  <a href="https://www.facebook.com/Muniverse"> Withdraw Eth </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>Fremont Community Hall</Table.Cell>
              <Table.Cell>11/3/2018</Table.Cell>
              <Table.Cell>5000</Table.Cell>
              <Table.Cell>
                  <a href="https://www.facebook.com/Muniverse"> Withdraw Eth </a>
              </Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>

        <Divider section />



      </Container>








    )
  }
}

export default IndividualShow;
