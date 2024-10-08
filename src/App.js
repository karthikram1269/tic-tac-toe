import React from "react";
import Board from "./Components/Board"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";

export default function App(){

    return(
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Board />}/>
                <Route path = "*" element={<ErrorPage />}/>
                <Route />
            </Routes>
        </BrowserRouter >
    )
}


