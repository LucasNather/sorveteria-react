import React from "react";
import {EstruturaPagina} from '../../components/EstruturaPagina'
import './style.css'

export function Sabores(){
    return(
        <EstruturaPagina>
            <main>
             <div className="container-banner-sabores">
                <section className="container-topo-sabores">
                    <h1>Nossos Sabores</h1>
                </section>
             </div>

             <section className="container-sobre-sabores">
                <h2>Sabores de Sorvete</h2>
                <div className="container-sobre-sabores__sorvete">
                    <div className="container-sobre-sabores__sorvete-card">
                        <img src="assets/sabor-oreo.png" alt="" />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo.Uma Explosão de sabor.</p>
                    </div>
                   
                    <div className="container-sobre-sabores__sorvete-card">
                        <img src="assets/sabor-pistache.png" alt="" />
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    
                    <div className="container-sobre-sabores__sorvete-card">
                        <img src="assets/sabor-cookies-avela.png" alt="" />
                        <h3>Sorvete de Cookies e Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
               
                    <div className="container-sobre-sabores__sorvete-card">
                        <img src="assets/sorbet-kiwi.png" alt="" />
                        <h3>Sorvete de kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                 
                    <div className="container-sobre-sabores__sorvete-card">
                        <img src="assets/sorbet-morango.png" alt="" />
                        <h3>Sorvete de morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                  
                    <div className="container-sobre-sabores__sorvete-card">
                        <img src="assets/sorbet-limao.png" alt="" />
                        <h3>Sorvete de limão siciliano</h3>
                        <p>O incrível sorvete gouretde limão siliciano vai te encantar.</p>
                    </div>
                </div>
             </section>
            </main>
        </EstruturaPagina>
    )
}