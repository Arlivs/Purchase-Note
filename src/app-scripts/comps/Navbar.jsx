import {Link} from "react-router-dom";
import "../../app-style/main.css"


export const Navbar = () => (
<header className="header navbar">
    <div className="container _head">
        <div className="header-logo">
            <Link to="/">Purchase - <span className="header-logo_note">Note</span></Link>
        </div>
        <nav className="header-nav">
            <Link to="/" className="header-nav_item _updates">Главная</Link>
            <Link to="/info" className="header-nav_item _info">Информация</Link>
            <Link to="/help" className="header-nav_item _help">Помощь</Link>
            <a href="/" className="header-nav_item _contacts">Контакты</a>
        </nav>
        <div className="registr">
            <button className="registr-btn"><Link to="/login">Регистрация</Link></button>
        </div>
    </div>
</header>
)