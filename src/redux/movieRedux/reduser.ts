import { IMovieReduserState } from "Interfaces/interfaceRedux/state/movieState/IMovieReduserState";

const initialState: IMovieReduserState = {
    popular: [],
    now_play: [],
    upcoming: [],
    top_rated: [],
    error: false,
};

const movieReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case 'REQUEST_LIST_POPULAR_MOVIE': {
            return {
                ...state,
                popular: state.popular.concat(action.payload),
            }
        }
        case 'REQUEST_LIST_NOW_PLAY_MOVIE': {
            return {
                ...state,
                now_play: state.now_play.concat(action.payload),
            }
        }
        case 'REQUEST_LIST_UPCOMING_MOVIE': {
            return {
                ...state,
                upcoming: state.upcoming.concat(action.payload),
            }
        }
        case 'REQUEST_LIST_TOP_RATED_MOVIE': {
            return {
                ...state,
                top_rated: state.top_rated.concat(action.payload),
            }
        }
        case 'ACTIVE_ERROR': {
            return {
                ...state,
                error: state.error = action.payload
            }
        }
        default:
            return state;
    }
};

export default movieReduser;