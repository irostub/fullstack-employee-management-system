import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
  }

  changeFirstNameHandler = (e) => {
    this.setState({ firstName: e.target.value });
  };
  changeLastNameHandler = (e) => {
    this.setState({ lastName: e.target.value });
  };
  changeEmailIdHandler = (e) => {
    this.setState({ emailId: e.target.value });
  };
  createEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log(JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then(() => {
      this.props.history.push("/");
    });
  };
  cancel = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form action="">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    className="form-control"
                    type="text"
                    placeholder="Enter First Name"
                    value={this.state.firstName}
                    onChange={this.changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    className="form-control"
                    type="text"
                    placeholder="Enter Last Name"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    className="form-control"
                    type="text"
                    placeholder="Enter Email"
                    value={this.state.emailId}
                    onChange={this.changeEmailIdHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={this.createEmployee.bind(this)}>
                  Save
                </button>
                <button className="btn btn-danger ml-2" onClick={this.cancel.bind(this)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
