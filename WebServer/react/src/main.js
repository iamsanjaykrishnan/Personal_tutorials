import ReactDOM from "react-dom";
import React from "react";
import NavbarTop from "./Navbar.jsx";
import { useAsync } from "react-async";
import { Mutex } from "async-mutex";
const mutex = new Mutex();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataServer: { main: { id: "main" } } };
    this.getData = this.getData_.bind(this);
    this.setData = this.setData_.bind(this);
  }

  log(param) {
    console.log("log1: ", param);
  }

  getData_(module_id, key) {
    return this.state.dataServer[module_id][key];
  }

  setData_(module_id, key, value) {
    var temp_ = { dataServer: { [module_id]: { [key]: value } } };
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
