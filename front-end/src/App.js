import NavBar from "./components/NavBar";
import Main from "./pages/main";
import { PrimeReactProvider } from "primereact/api";
import Loading from "./components/Loading";
import "primereact/resources/themes/viva-light/theme.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";

export const LoadingContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <PrimeReactProvider>
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
          <div className="App">
            <Loading show={isLoading} />
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </LoadingContext.Provider>
      </PrimeReactProvider>
    </Router>
  );
}

export default App;
