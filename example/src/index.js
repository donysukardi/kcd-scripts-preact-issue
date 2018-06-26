import { Component, render } from "preact";
import Example from "example-lib/preact";

export default class App extends Component {
  render() {
    return (
      <Example />
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
