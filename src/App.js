import React from "react";
import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  relleno = "esto es un relleno";

  suma(a, b) {
    return a + b;
  }

  componentDidMount() {
    console.log("Me monte");
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.titulo}</h1>
        <h2>{this.relleno}</h2>
        <h3>{this.suma(this.props.titulo, this.relleno)}</h3>
      </div>
    );
  }
}
