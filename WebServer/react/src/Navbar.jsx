import React from "react";
//import PropTypes from "prop-types";

/*
Navbars are defined here

NavbarTop,NavbarSide

Props:
    NavbarTop :{ None}
    NavbarSide :{ input : "barString", // the bar to be activated
                  ouput : main.func, to set output}

*/

class NavbarTop extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.log(this.props.getData("main", "id"));
  }

  log(param) {
    console.log("log2: ", param);
  }
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error);
  }
  changeColor = () => {
    console.log(this.props.setData("Navbar", "id", "test"));
  };

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src="content/images/logo/LOGO.png" alt="" />
          </a>
          <button type="button" onClick={this.changeColor}>
            Change color
          </button>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbar9"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbar9">
            <ul className="navbar-nav ml-auto">
              <li className={"nav-item " + this.props.dashboard}>
                <a className="nav-link" onClick={this.changeColor}>
                  DASHBOARD
                </a>
              </li>
              <li className={"nav-item " + this.props.specifications}>
                <a className="nav-link" href="#">
                  SPECIFICATIONS
                </a>
              </li>
              <li className={"nav-item " + this.props.contact}>
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

class NavbarSide extends React.Component {
  render() {
    this.props.log("hallo sanjay");
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src="content/images/logo/LOGO.png" alt="" />
          </a>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbar9"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbar9">
            <ul className="navbar-nav ml-auto">
              <li className={"nav-item " + this.props.dashboard}>
                <a className="nav-link" href="#">
                  DASHBOARD
                </a>
              </li>
              <li className={"nav-item " + this.props.specifications}>
                <a className="nav-link" href="#">
                  SPECIFICATIONS
                </a>
              </li>
              <li className={"nav-item " + this.props.contact}>
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

/*MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};*/

export default NavbarTop;
