import logo from "../assets/Logo.jpg"
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/Header.css"
function Header(){
    return(
        <>
        <header className="header">
            <img src={logo} alt="" className="logo" />
            <center>
            <ul id="list">
                <li>
                    <a href="#"><i className="bi bi-house-door-fill"></i> add your blog</a>
                </li>
                <li>
                    <a href="#"><i class="bi bi-person-circle"></i> About</a>
                </li>
                <li>
                    <a href="#"><i class="bi bi-envelope"></i> Contact</a>
                </li>
            </ul>
            </center>
        </header>
        </>
    )   
}

export default Header