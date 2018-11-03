import React, { Component } from 'react';
import { Card, Icon, Button, Segment, Container } from 'semantic-ui-react'

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
      <Container fluid>
        <Card.Group>
          <Card
            header='Elliot Baker'
            meta='Municipal Bond'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={this.renderButtons()}
          />

          <Card
            header='Elliot Baker'
            meta='Municipal Bond'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={this.renderButtons()}
          />

          <Card
            header='Elliot Baker'
            meta='Municipal Bond'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={this.renderButtons()}
          />

          <Card
            header='Elliot Baker'
            meta='Municipal Bond'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={this.renderButtons()}
          />

          <Card
            header='Elliot Baker'
            meta='Municipal Bond'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={this.renderButtons()}
          />
        </Card.Group>
      </Container>
    )
  }
}

export default IndividualShow;
