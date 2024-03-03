import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join";
// Import your Chat component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Join} />
          <Route path="/chat" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
