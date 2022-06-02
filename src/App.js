import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

export default class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </div>
        );
    }
}
