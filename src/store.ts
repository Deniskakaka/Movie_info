import { createStore, applyMiddleware } from 'redux';
import rootReduser from 'Redux/rootRedux/reduser';
import movieReduser from "Redux/movieRedux/reduser";
import tvReduser from "Redux/tvRedux/reduser";
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        rootReduser,
        movieReduser,
        tvReduser
    }),
    applyMiddleware(logger, thunk)
);

export default store;