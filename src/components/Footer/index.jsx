import React from "react";
import './style.css'

export function Footer(){
    return(
        <footer>
            <section className="container-rodape">
                <img src="assets/logo.png" alt="logoda sorveteria" className="container-rodape__logo"/>
                <ul className="container-rodape__lista">
                    <li className="container-rodape__lista-titulo">Endereço</li>
                    <li className="container-rodape__lista-item">Av.Bernardino de</li>
                    <li className="container-rodape__lista-item">Campos, 98</li>
                    <li className="container-rodape__lista-item">São Paulo,SP 1245-678</li>
                </ul>
                <ul className="container-rodape__lista">
                    <li className="container-rodape__lista-titulo">Contato</li>
                    <li className="container-rodape__lista-item">info@meusite.com</li>
                    <li className="container-rodape__lista-item">Tel:(92)98118-5790</li>
                </ul>
                <ul className="container-rodape__lista">
                    <li className="container-rodape__lista-titulo">Horário</li>
                    <li className="container-rodape__lista-item">Aberto todos os dias</li>
                    <li className="container-rodape__lista-item">10:00 às 22:00</li>
                </ul>
            </section>
            
            <section className="container-rodape__copyrigth">
                <p>Gelateria. Orgulhosamente desenvolvido por Lucas Nather</p>
            </section>
        </footer>
    )
}