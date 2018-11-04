import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Form} from 'semantic-ui-react'

class CreateBondModal extends Component {
  state = {
    modalOpen: false,
    stackId: null,
    name: null,
    startDate: null,
    orderDeadline: null,
    totalAmountFiat: null,
    totalTokenSupply: null,
    tokenSymbol: null,
    bondContractERC20Address: null,
    creditRating: null,
    couponRate: null,
    faceValue: null,
    marketValue: null,
    tTMInMonths: null,
    status: null,
    typeOfBond: null,
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

    const stackId = contract.methods["createBond"].cacheSend(this.state.name, this.state.startDate, this.state.orderDeadline, this.state.totalAmountFiat,
    this.state.totalTokenSupply, this.state.tokenSymbol, this.state.bondContractERC20Address, this.state.creditRating, this.state.couponRate, this.state.faceValue,
    this.state.marketValue, this.state.tTMInMonths, this.state.status, this.state.typeOfBond, {
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
                <label>Start Date</label>
                <input placeholder='Start Date' onChange={(e) => {this.setState({startDate: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Order Deadline</label>
                <input placeholder='Order Deadline' onChange={(e) => {this.setState({orderDeadline: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Total Fiat Amount</label>
                <input placeholder='Total Fiat Amount' onChange={(e) => {this.setState({totalAmountFiat: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Total Token Supply</label>
                <input placeholder='Total Fiat Amount' onChange={(e) => {this.setState({totalTokensSupply: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Token Symbol</label>
                <input placeholder='Total Fiat Amount' onChange={(e) => {this.setState({tokenSymbol: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>ERC20 Address</label>
                <input placeholder='ERC20 Address' onChange={(e) => {this.setState({bondContractERC20Address: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Coupon Rate</label>
                <input placeholder='Coupon Rate' onChange={(e) => {this.setState({couponRate: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Face Value</label>
                <input placeholder='Face Value' onChange={(e) => {this.setState({faceValue: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Credit Rating</label>
                <input placeholder='Credit Rating' onChange={(e) => {this.setState({creditRating: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Market Value</label>
                <input placeholder='Market Value' onChange={(e) => {this.setState({marketValue: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>tTM in Months</label>
                <input placeholder='Market Value' onChange={(e) => {this.setState({tTMInMonths: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Status</label>
                <input placeholder='Market Value' onChange={(e) => {this.setState({status: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Bond Type</label>
                <input placeholder='Market Value' onChange={(e) => {this.setState({typeOfBond: e.target.value})}} />
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
