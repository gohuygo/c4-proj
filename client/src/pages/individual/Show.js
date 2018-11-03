import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'

class IndividualShow extends Component {

  render() {
    return(
      <div>
        <Card.Group>
          <Card
            image='/images/avatar/large/elliot.jpg'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={<p>This belongs to the city of Berkeley</p>}
          />

          <Card
            image='/images/avatar/large/elliot.jpg'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={<p>This belongs to the city of Berkeley</p>}
          />

          <Card
            image='/images/avatar/large/elliot.jpg'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={<p>This belongs to the city of Berkeley</p>}
          />

          <Card
            image='/images/avatar/large/elliot.jpg'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={<p>This belongs to the city of Berkeley</p>}
          />

          <Card
            image='/images/avatar/large/elliot.jpg'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={<p>This belongs to the city of Berkeley</p>}
          />
        </Card.Group>
      </div>
    )
  }
}

export default IndividualShow;
