import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import store from "Root/store";
import "Root/style/main.scss";

import Header from "Root/components/header/Header";
import StartPage from "Root/components/content/startPage/StartPage";
import MovieDetails from "Components/content/details/MovieDetails";


class App extends Component {
    render() {
        return (
            <Provider key={Date.now()} store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/movie_details" element={<MovieDetails />} />
                    <Route path="/tv_details" element={<MovieDetails />} />
                </Routes>
            </Provider>
        )
    }
}

export default App;
