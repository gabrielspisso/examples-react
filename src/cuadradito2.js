import React from "react";
import "./styles.css";

export default class Cuadradito2 extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      contador: props.contador,
      pepe: ""
    });
  }

  componentDidMount() {
    let pepes = "";
    for (var i = 0; i < this.state.contador; i++) {
      pepes += "pepe";
    }
    this.setState({ pepe: pepes });
  }

  componentWillUnmount() {
    console.log("ME DESMONTE");
  }

  render() {
    return <div className="cuadradito">{this.state.pepe}</div>;
  }
}
