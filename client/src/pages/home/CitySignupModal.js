import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Form} from 'semantic-ui-react'

class CitySignupModal extends Component {
  state = {
    modalOpen: false,
    state: null,
    county: null,
    city: null,
    issuer: null,
    stackId: null,
  }

  constructor(props){
    super(props)
  }

  handleOpen  = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSignup = () => {
    const { drizzle, drizzleState } = this.props;
    const { state, county, city, issuer } = this.state

    const contract = drizzle.contracts.City;



    const stackId = contract.methods["createCity"].cacheSend(state, county, city, issuer, {
      from: drizzleState.accounts[0]
    });

    this.setState({ stackId: stackId });
  }

  getTxStatus = () => {
    const { transactions, transactionStack } = this.props.drizzleState;

    const txHash = transactionStack[this.state.stackId];

    if (!txHash) return null;

    return transactions[txHash].status;
  };

  render() {
    return(
      <Modal
      open={this.state.modalOpen}
      onClose={this.handleClose} >
        <Modal.Header>City Signup</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field required>
                <label>State</label>
                <input placeholder='State' onChange={(e) => {this.setState({state: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>County</label>
                <input placeholder='County' onChange={(e) => {this.setState({county: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>City</label>
                <input placeholder='City' onChange={(e) => {this.setState({city: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Issuer</label>
                <input placeholder='Issuer' onChange={(e) => {this.setState({issuer: e.target.value})}} />
              </Form.Field>
            </Form>

            <h3>{!!this.getTxStatus() && `Transaction status: ${this.getTxStatus()}`}</h3>

          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button color='green' onClick={this.handleSignup} inverted>
            <Icon name='checkmark'/> Signup
          </Button>

          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close'/> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default CitySignupModal
