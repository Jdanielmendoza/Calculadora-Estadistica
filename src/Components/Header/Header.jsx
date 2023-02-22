import "./Header.css"; 
import Menubar from "../menu-bar/Menubar";

function Header(){
    return(
        <header className="Header">
            <Menubar/>
            <a className="home" href="/">FICCT</a>
        </header>
    ); 
}

export default Header; 