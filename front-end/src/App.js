import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import { PrimeReactProvider } from "primereact/api";
import PoliticalTest from "./components/political-test-form/PoliticalTest";
import Loading from "./components/Loading";
import "primereact/resources/themes/saga-blue/theme.css";
import { createContext, useState } from "react";

export const LoadingContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PrimeReactProvider>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <div className="App">
          <Loading show={isLoading} />
          <NavBar />
          <Intro />
          <PoliticalTest />
        </div>
      </LoadingContext.Provider>
    </PrimeReactProvider>
  );
}

export default App;
