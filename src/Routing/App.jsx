import React from "react";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> } >
                        {/* <Route exact path="/home" element={ <Home /> } /> */}
                        <Route exact path="/about" element={ <About /> } />
                        <Route exact path="/contact" element={ <Contact /> } />
                        <Route exact path="*" element={ <Error /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
