import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LoginForm from "./pages/UsersForm/LoginForm";
import Register from "./pages/UsersForm/Register";

function App() {
  return (
    <>
      <ToastContainer />
      <LoginForm />
      <Register />
    </>
  );
}

export default App;
