import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import { PrimeReactProvider } from "primereact/api";
import PoliticalTest from "./components/political-test-form/PoliticalTest";

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <NavBar />
        <Intro />
        <PoliticalTest />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
