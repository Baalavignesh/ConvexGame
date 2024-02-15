import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import withAuth from "./HOC/withAuth";
import { PRIMARY } from "./constants/colors";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import Error from "./pages/error/error";
import About from "./pages/about/about";

PRIMARY
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" Component={withAuth(Dashboard)} />
        <Route path="/" Component={Login} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
