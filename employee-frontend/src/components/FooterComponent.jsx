import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <span className="text-muted">All Rights Reserved 2021 @Irostub</span>
      </div>
    );
  }
}

export default FooterComponent;
