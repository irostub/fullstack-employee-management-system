import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
          <div>
            <a href="#" className="navbar-brand">
              LOGO
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
