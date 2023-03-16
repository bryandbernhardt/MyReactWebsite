import "./App.css";
import Apresentation from "./Apresentation/Apresentation";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Apresentation></Apresentation>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
