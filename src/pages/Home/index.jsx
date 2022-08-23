import React from "react";
import {EstruturaPagina} from '../../components/EstruturaPagina'
import './style.css'

export function Home(){
    return(
        <EstruturaPagina>
            <main>
                <div className="container-banner">
                    <section className="container-banner__fundo">
                        <h1>Sorvete Artesanal</h1>
                    </section>
                </div>

                <div className="container-home">
                    <div className="container-home__content">
                        <img src="assets/banner-sabores.jpg" alt="banner dos sabores" />
                        <div className="container-home__descricao">
                            <h2 className="container-home__titulo">Nossos Sabores</h2>
                            <p className="container-home__strong"><strong>Novos e deliciosos!</strong></p>
                            <p className="container-home__paragrafo">Sorvete bom é aquele feito com os melhores ingredientes!
                                Aqui na gelateria todos os nossos produtos são naturais, à
                                base de frutas esem nenhum conservante! Também temos opções 
                                sem lactose e sem açúcar. Venha conhecer e perceber que tem
                                como o sorvete ser delicioso e saudável do mesmo tempo!
                            </p>
                        </div>
                    </div>
                    
                    <div className="container-home__content">
                        <div className="container-home__descricao">
                            <h2 className="container-home__titulo">Nossos Eventos</h2>
                            <p className="container-home__strong"><strong>Delícias com sorvete!</strong></p>
                            <p className="container-home__paragrafo">Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos 
                                para te atender os melhores eventos com os melhores sorvete da sua vida!
                                Venha nos conhecer e passar um tempo com a gente
                            </p>
                        </div>
                        <img src="assets/eventos-image.jpg" alt="banner dos eventos" />
                    </div>
                   
                    <div className="container-home__content">
                        <img src="assets/sobre-image.jpg" alt="banner de sobre nós" />
                        <div className="container-home__descricao">
                            <h2 className="container-home__titulo">Sobre Nós</h2>
                            <p className="container-home__strong"><strong>Alegria em cada casquinha!</strong></p>
                            <p className="container-home__paragrafo">Venha tomar o melhor sorvete da região aqui com a gente!
                                Nós estamos há anos no mecado produzindo o que tem de melhor
                                para nosso cliente e você não pode ficar fora dessa. Venha nos fazer 
                                uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade
                            </p>
                        </div>  
                    </div>
                </div>
            </main>
            
        </EstruturaPagina>
    )
}