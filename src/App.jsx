import Nav from "./components/Nav";
import Card from "./components/Card";
import Data from "../data.js";
import "./App.css";

function App() {
  let Cards = Data.map((card) => {
    return <Card {...card} />;
  });
  return (
    <div className="page">
      <Nav />
      {Cards}
    </div>
  );
}

export default App;
