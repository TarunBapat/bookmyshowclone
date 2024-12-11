import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./Routes";
import Navbar from "./components/Navigation";
import Footer from "./pages/Home/Footer";

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
