import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    count: 10,
    isVisible: true,
      customer: {
        firstName: props.firstName,
        lastName: props.lastName,
        status: props.status,
      }
    }
  }

  handleFirstNameChanged(event) {
    var customer        = this.state.customer;
    customer.firstName  = event.target.value;

    this.setState({ customer: customer });
  }

  handleLastNameChanged(event) {
    var customer      = this.state.customer;
    customer.lastName = event.target.value;

    this.setState({ customer: customer });
  }

  handleStatusChanged(event) {
    var customer    = this.state.customer;
    customer.status = event.target.value;

    this.setState({ customer: customer });
  }

  
   handleButtonClicked() {
    const add = this.state.isVisible ? -1 : 1;
    this.setState({
      count: this.state.count + add,
      isVisible: !this.state.isVisible,
    });
    console.log(this.state.customer);
  };
  

  render() {
    

    const { isVisible } = this.state;
    return (
      <section className="login">
      <div id="web-1" className={`modl${isVisible ? " is-visible" : ""}`}>
        <div class="modl-dialog">
          <header class="modl-header">
            <h3>Who Are You?</h3>
          </header>
          <div>
        <label className="fortext">
          <h4>First Name</h4>
        </label>
        <div className="nameholder"><input placeholder="First Name" type="text" value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)}/></div>
       
        <label className="fortext"><h4>Last Name</h4></label>
        <div className="nameholder"><input placeholder="Last Name" type="text" value={this.state.customer.lastName} onChange={this.handleLastNameChanged.bind(this)}/></div>
       
        <label className="fortext1"><h4>Status</h4></label>
        <div className="nameholder1"><select className="submitBTN" value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}>
        <option value="">
            <h4> Who are you </h4>
          </option> 
          <option value="Recruiter">
            RECRUITER
          </option>
          <option value="guest">
            GUEST
          </option>
        </select>
        </div>
            <button onClick={this.handleButtonClicked.bind(this)} className="classic1"><a className="sli1">SUBMIT</a></button>
      </div>
        </div>
      </div>
      </section>
    );
  }
}
