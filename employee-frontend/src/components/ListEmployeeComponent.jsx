import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  addEmployee = () => {
    this.props.history.push("/create-employee/-1");
  };

  editEmployee = (id) => {
    this.props.history.push(`/create-employee/${id}`);
  };

  deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter((employee) => employee.id != id),
      });
    });
  };
  viewEmployee = (id) => {
    this.props.history.push(`view-employee/${id}`);
  };

  //라이프사이클 : 컴포넌트가 마운트 된 후 즉시 호출
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-primary mb-3" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="ml-2 btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewEmployee(employee.id)}
                      className="ml-2 btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
