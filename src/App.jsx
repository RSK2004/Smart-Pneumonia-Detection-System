import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SignUp from "./SignUp";
import Login from "./Login";
import Analysis from "./Analysis";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route
        path="/analysis"
        element={
          <ProtectedRoute>
            <Analysis />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;