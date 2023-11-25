import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";
import ByCategoryPage from "./Pages/ByCategoryPage.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage/>} path="/"/>
                    <Route element={<ByCategoryPage/>} path="/byCategory/:ID"/>
                    <Route element={<DetailsPage/>} path="/details/:ID"/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;