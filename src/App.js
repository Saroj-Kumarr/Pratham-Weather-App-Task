import "./App.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Weather from "./Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/home" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
