import ReactDOM from "react-dom";
import React from "react";
import NavbarTop from "./Navbar.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataServer: { main: { id: "main" } } };
    this.getData = this.getData_.bind(this);
    this.setData = this.setData_.bind(this);
  }

  getData_(module_id, key) {
    if (!this.state.dataServer.hasOwnProperty(module_id)) {
      var temp_ = { dataServer: { [module_id]: { [key]: "undefined" } } };
      this.state = { ...this.state, ...temp_ };
    } else if (!this.state.dataServer[module_id].hasOwnProperty(key)) {
      var temp_ = { dataServer: { [module_id]: { [key]: "undefined" } } };
      this.state = { ...this.state, ...temp_ };
    }
    return this.state.dataServer[module_id][key];
  }

  setData_(module_id, key, value) {
    var temp_ = { dataServer: { [module_id]: { [key]: value } } };
    this.state = { ...this.state, ...temp_ };
    this.setState((state, temp_) => ({ ...state, ...temp_ }));
    return this.state.dataServer[module_id][key];
  }

  render() {
    return (
      <div>
        <NavbarTop getData={this.getData} setData={this.setData} />
        {this.getData("main", "id")}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("Main"));
