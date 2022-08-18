import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import { Homepage, Logo, LogOut, Notifications, Payment, Settings, Shareholders } from "./assets/svg-img/svg.jsx";

function App() {
  return (
    <div className="row">
      <div className="col-2 sidebar-bg">
        <Link className="d-block text-decoration-none" to="/logo"><Logo />Hello</Link>
        <Link className="d-block text-decoration-none" to="/"><Homepage /></Link>
        <Link className="d-block text-decoration-none" to="/settings"><Settings /></Link>
        <Link className="d-block text-decoration-none" to="/logout"><LogOut /></Link>
        <Link className="d-block text-decoration-none" to="/shareholder"><Shareholders /></Link>
        <Link className="d-block text-decoration-none" to="/payment"><Payment /></Link>
        <Link className="d-block text-decoration-none" to="/notifications"><Notifications /></Link>
      </div>
    </div>

  )
}

export default App;
