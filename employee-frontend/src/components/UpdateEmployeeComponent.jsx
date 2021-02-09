/**
 * NOTICE
 *
 * UpdateEmployeeComponent.jsx 는 더 이상 사용하지 않습니다.
 * CreateEmployeeComponent.jsx 와 중복되는 코드가 매우 많으며 로직 또한 비슷하므로
 * CreateEmployeeComponent.jsx 를 재사용하여 Update 를 구현합니다.
 */

import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //App.js update-employee/:id 에서 id를 가져옴
      id: this.props.match.params.id,
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
  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log(JSON.stringify(employee));

    EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
      this.props.history.push("/employees");
    });
  };
  cancel = () => {
    this.props.history.push("/employees");
  };

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
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
                  <label>Email Id</label>
                  <input
                    name="email"
                    className="form-control"
                    type="text"
                    placeholder="Enter Email"
                    value={this.state.emailId}
                    onChange={this.changeEmailIdHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={this.updateEmployee.bind(this)}>
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

export default UpdateEmployeeComponent;
