import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Routes, Navigate } from 'react-router-dom';
import store from "Root/store";
import "Root/style/main.scss";

import Header from "Root/components/header/Header";
import StartPage from "Root/components/content/StartPage";


class App extends Component {
    render() {
        return (
            <Provider key={Date.now()} store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<StartPage/>} />
                </Routes>
            </Provider>
        )
    }
}

export default App;
