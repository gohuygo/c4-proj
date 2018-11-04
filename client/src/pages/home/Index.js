import React, { Component, Fragment } from 'react';
import { Segment, Card, Container, Grid, List, Header } from 'semantic-ui-react';
import styled from 'styled-components'
import { Redirect } from 'react-router'


const BlueBackgroundContainer = styled.div `
  background-color: #394cb5;
  height: 420px;
`

class HomeIndex extends Component {
  state = { loading: true, drizzleState: null, isCityDataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const cityContract = drizzle.contracts.City;

    const isCityDataKey = cityContract.methods["isCity"].cacheCall();

    this.setState({ isCityDataKey });
  }

  isCity() {
    const { City } = this.props.drizzleState.contracts;

    const isCityRequest = City.isCity[this.state.isCityDataKey];
    return isCityRequest ? isCityRequest.value : false;
  }

  isIndividual() {
    return false;
  }

  render() {
    if(this.isIndividual()) return(<Redirect to='/individual'/>);
    if(this.isCity())       return(<Redirect to='/city'/>);

    return(
      <Fragment>
        <BlueBackgroundContainer>
          <div class="ui vertical masthead center aligned segment">
            {/*Hack the vertical align for now.... */ }
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div class="text">
              <h1 class="ui inverted header">
                Invest in your community
                {/*kidstime.al/wp-content/uploads/2018/02/pest-control-beldon.jpg*/}

              </h1>
            </div>
          </div>
        </BlueBackgroundContainer>

        <Segment vertical>
          <br /><br /><br /><br />
          <Card.Group centered>
            <Card
              image='https://building-microgrid.lbl.gov/sites/default/files/styles/image_main/public/Berkeley%20Pic-small.png?itok=RFa6QH9B'
              header='Berkeley, CA'
              meta='Municipal Bond'
              extra={<p>This belongs to the city of Berkeley</p>}
            /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <Card
              image='https://www.charlottefive.com/wp-content/uploads/2018/02/skyline-charlotte-nc-charlottefive-696x463.jpg'
              header='Charlotte, NC'
              meta='Municipal Bond'
              extra={<p>This belongs to the city of Berkeley</p>}
            /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <Card
              image='https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx'
              header='San Francisco, CA'
              meta='Municipal Bond'
              extra={<p>This belongs to the city of Berkeley</p>}
            />
          </Card.Group>
          <br /><br /><br /><br />
        </Segment>

       <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={13}>
                <Header inverted as='h4' content='About us' />
                <List link inverted>
                  <List.Item as='a'>Why Muniverse</List.Item>
                  <List.Item as='a'>Our Approach</List.Item>
                  <List.Item as='a'>FAQ</List.Item>
                  <List.Item as='a'>Contact us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Follow us' />
                <List link inverted>
                <List.Item as='a'>
                  <a class="twitter ssk ssk-twitter" href="https://twitter.com/Muniverse" target="_blank" title="Muniverse on Twitter" data-ssk-ready="true">
                    <img src="https://s18955.pcdn.co/wp-content/uploads/2017/05/Twitter.png" width="22" height="22" />
                  </a>
                  </List.Item><List.Item as='a'>
                  <a class="ssk ssk-facebook facebook" href="https://www.facebook.com/Muniverse" target="_blank" title="Muniverse on Facebook" data-ssk-ready="true">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwopLsN3YNu5H50V3w2FxSMRXC_qJQuFV9AXfy1SleOTj1M8Tdw" width="22" height="22" />
                  </a>
                  </List.Item><List.Item as='a'>
                  <a class="ssk ssk-facebook facebook" href="https://plus.google.com/+Muniverse" target="_blank" title="Muniverse on Facebook" data-ssk-ready="true">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRkKzJMwRPPVX3VOnM0Q1d_zG6mGH0tBxVZhS2WAADFoUdfgPMw" width="22" height="22" />
                  </a>
                  </List.Item>
                </List>
              </Grid.Column>
            {/*  <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>*/}
            </Grid.Row>
          </Grid>
        </Container>
        </Segment>
      </Fragment>
    )
  }
}

export default HomeIndex;
