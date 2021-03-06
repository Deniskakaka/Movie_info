import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import store from "Root/store";

import Header from "Root/components/header/Header";
import StartPage from "Root/components/content/startPage/StartPage";
import Details from "Components/content/details/Details";
import Content from "./content/filtersList/Content";


class App extends Component {
    render() {
        return (
            <Provider key={Date.now()} store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/movie_details/:id" element={<Details />} />
                    <Route path="/tv_details/:id" element={<Details/>} />
                    <Route path="/movie/:type" element={<Content/>}/>
                    <Route path="/tv/:type" element={<Content/>}/>
                </Routes>
            </Provider>
        )
    }
}

export default App;
