import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Options from "./Pages/Options/Options";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/options" element={<Options />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
