import React from "react";
import {EstruturaPagina} from '../../components/EstruturaPagina'
import './style.css'

export function Sobre(){
    return(
        <EstruturaPagina>
            <main>
                <div className="container-banner-sobre">
                    <section className="container-banner__titulo">
                        <h1>A Gelateria</h1>
                    </section>
                </div>

                <section className="container-sobre_descricao">
                    <h2>Sobre Nós</h2>
                    <p className="container-sobre_descricao__strong"><strong>Nós simplesmente amamos sorvete!</strong></p>
                    
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido.
                        Fazemos o melhorsorvete para nossos clientes e gostamos de raceber elogios.
                        Estamos operando desde 2009 com as melhores matérias-primas para a produção final do 
                        sorvete. Vendemos tanto para varejo como para atacado.</p>
                    
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para
                        sua residência e aproveitar juntos com a família. Também vendemos para estabelecimentos
                        e criamos eventos como festa de aniversário, formaturas e eventos empresariais. 
                        Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar
                        o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, 
                        com o melhor sorvete da cidade.</p>
                </section>

                <div className="container-sobre__images">
                    <img src="assets/sobre-image.jpg" alt="pessoas com sorvete" />
                    <img src="assets/sorveteria.jpg" alt="sorveteria" />
                </div>
            </main>
        </EstruturaPagina>
    )
}