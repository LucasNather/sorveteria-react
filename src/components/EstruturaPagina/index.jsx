import React from "react";
import {Header} from '../Header'
import {Footer} from '../Footer'

export function EstruturaPagina(props){
    return(
        <>
            <Header/>

            {props.children}

            <Footer/>
        </>
    )
}