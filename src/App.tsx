import "./App.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./auth/Login.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </Router>
  );
}
export default App;
