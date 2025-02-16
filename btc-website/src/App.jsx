import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Projects } from "./pages/Projects";
import { Support } from "./pages/Support";
import { Team } from "./pages/Team";
import { Home } from "./pages/Home";
import { Join } from "./pages/Join";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/support" element={<Support />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
