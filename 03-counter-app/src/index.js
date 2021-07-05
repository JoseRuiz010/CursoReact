import ReactDOM from "react-dom";
import PrimerApp from "./PrimerApp";
import "./index.css";
import CounterApp from "./Components/CounterApp";
const saludo = <h1>Hola mindo</h1>;

const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimerApp />, divRoot);
//ReactDOM.render(<CounterApp value={5} />, divRoot);
