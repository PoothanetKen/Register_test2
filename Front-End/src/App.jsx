import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Homepage from "./components/Homepage";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/homepage" element={<Homepage />}/>
            </Routes>
        </Router>
    )
}

export default App;