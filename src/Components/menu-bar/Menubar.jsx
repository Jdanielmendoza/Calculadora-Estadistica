import "./Menubar.css" ;
import { Link } from "react-router-dom";

const navbarClick = () =>{
    let a = document.querySelector(".navbar");
    let b = document.querySelector(".listItems");
    a.classList.toggle("navbarclick");
    b.classList.toggle("viewItems");
}

function Menubar(){
    return(
        <>
            <div className="navbar" onClick={navbarClick}>
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </div>
            <div className="items">
                <ul className="listItems">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/AcercaDe">Acerca de</Link></li>
                    <li><Link to="/Glosario">Glosario</Link></li>
                    <li><Link to="https://drive.google.com/file/d/185mHqxXDHguy98pmMvcT9hS991VKFTG6/view?usp=sharing">Formulario</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Menubar; 