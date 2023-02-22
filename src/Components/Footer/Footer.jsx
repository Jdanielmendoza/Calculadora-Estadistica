import "./Footer.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const Yes = document.querySelector("#SendForm");
        Yes.value = "Enviando....";
        emailjs.sendForm('GmailMensaje', 'template_6x0k0ti', form.current, 'Wv6ykrOb-wrVCqkLh')
            .then((result) => {
                Yes.value = "Enviado!";
                Yes.classList.toggle("MEnviado");
            }, (error) => {
                alert("Error al enviar, Intente de nuevo");
            });
    };

    return (
        <div className="ContainerFooter">
            <p className="Version">VERSIÓN 1.0.1</p>
            <p className="atribucion">BY: Daniel Mendoza</p>
            <p className="coment">Tus sugerencias nos ayudan a mejorar:</p>
            <form ref={form} onSubmit={sendEmail} className="FormEmail">
                <label className="NameForm" >Nombre</label>
                <input type="text" name="user_name" required />
                <label className="MForm" >Mensaje</label>
                <textarea name="message" required/>
                <input type="submit" value="Enviar" id="SendForm" />

            </form>
        </div>
    );
};

export default Footer;