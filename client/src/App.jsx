import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./Routes";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {allRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
