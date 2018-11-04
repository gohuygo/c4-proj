import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Form} from 'semantic-ui-react'

class CreateBondModal extends Component {
  state = {
    modalOpen: false,
    stackId: null,
    name: null,
    totalTokenSupply: null,
    tokenSymbol: null,
    status: null,
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

    const stackId = contract.methods["createBond"].cacheSend(this.state.name, parseInt(this.state.totalTokenSupply), this.state.tokenSymbol, this.state.status, {
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
        <Modal.Header>Create Bond</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field required>
                <label>Name</label>
                <input placeholder='Name' onChange={(e) => {this.setState({name: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Token Symbol</label>
                <input placeholder='Token Symbol' onChange={(e) => {this.setState({tokenSymbol: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Status</label>
                <input placeholder='Status' onChange={(e) => {this.setState({status: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Total Supply</label>
                <input placeholder='Total Supply' onChange={(e) => {this.setState({totalTokenSupply: e.target.value})}} />
              </Form.Field>
            </Form>

            <h3>{!!this.getTxStatus() && `Transaction status: ${this.getTxStatus()}`}</h3>

          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button color='green' onClick={this.handleSignup} inverted>
            <Icon name='checkmark'/> Create
          </Button>

          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close'/> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default CreateBondModal
