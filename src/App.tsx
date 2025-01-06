import "./App.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./auth/Login.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import Detail from "./menu/Detail.tsx";
import AdminLayout from "./layout/AdminLayout.tsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/" element={<AdminLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/menu/details" element={<Detail />} />
              </Route>
          </Routes>
      </Router>
  );
}
export default App;
