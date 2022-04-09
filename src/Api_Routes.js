import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Characters from './pages/Characters';
import Details from './pages/Details';

function Pages () {
    return(
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Characters/>}/>
            <Route exact path = "/details/:id" element={<Details/>}/>  
            </Routes>
        </BrowserRouter>
    )
}

export default Pages