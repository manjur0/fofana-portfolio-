import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-[#F9FAFB]">
      <Navbar></Navbar>
      <Outlet> </Outlet>
    </div>
  );
}

export default App;
