import React from "react";
import {Link} from 'react-router-dom'
import './style.css'

export function Header(){
    return(
      <header>
        <section className="container-topo">
            <Link to='/'><img src="assets/logo.png" alt="logo da sorveteria" className="container-topo__logo"/></Link>
            <ul className="container-topo__lista">
                <li className="container-topo__item">
                    <Link to='/' className="container-topo__link">Home</Link>
                </li>
               
                <li className="container-topo__item">
                    <Link to='/sabores' className="container-topo__link">Sabores</Link>
                </li>
                
                <li className="container-topo__item">
                    <Link to='/sobre' className="container-topo__link">Sobre</Link>
                </li>
            </ul>
        </section>
      </header>
    )
}