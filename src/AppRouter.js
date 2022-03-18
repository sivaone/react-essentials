import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Err404 } from "./pages";

function AppRouter() {
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<About />}/>
                <Route path={"/events"} element={<Events />}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"*"} element={<Err404 />}/>
            </Routes>
        </div>
    )
}

export default AppRouter;