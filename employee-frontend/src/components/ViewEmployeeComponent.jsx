import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label>Employee First Name</label>
          </div>
          <div className="row">
            <h4>{this.state.employee.firstName}</h4>
          </div>
          <div className="row">
            <label>Employee Last Name</label>
          </div>
          <div className="row">
            <h4>{this.state.employee.lastName}</h4>
          </div>
          <div className="row">
            <label>Employee Email Id</label>
          </div>
          <div className="row">
            <h4>{this.state.employee.emailId}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
