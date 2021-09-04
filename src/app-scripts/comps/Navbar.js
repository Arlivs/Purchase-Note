import { BrowserRouter, Link, Route } from "react-router-dom";
import "../../app-style/main.css"
import Info from "./Info"
import Register from "./Reg"
import Help from "./Help";
import Home from "./Home";

export default function Navbar() {
    return (
    <BrowserRouter>
    <header className="header navbar">
        <div className="header-logo">
            <Link to="/">Purchase - <span className="header-logo_note">Note</span></Link>
        </div>
        <nav className="header-nav">
            <Link to="/info" className="header-nav_item _info">Информация</Link>
            <Link to="/help" className="header-nav_item _help">Помощь</Link>
            <Link to="/" className="header-nav_item _updates">Компонент</Link>
            <a href="/" className="header-nav_item _contacts">Контакты</a>
        </nav>
        <div className="registr">
            <button className="registr-btn"><Link to="/login">Регистрация</Link></button>
        </div>
    </header>
        <Route exact path="/info">
            <Info/>
        </Route>
        <Route exact path="/help">
            <Help/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/login">
            <Register/>
        </Route>
    </BrowserRouter>
    )
}