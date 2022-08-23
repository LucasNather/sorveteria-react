import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "../../pages/Home";
import {Sabores} from '../../pages/Sabores'
import {Sobre} from '../../pages/Sobre'

export function Rota(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path ="/" element={<Home/>}></Route>
                <Route path="/sabores" element={<Sabores/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}