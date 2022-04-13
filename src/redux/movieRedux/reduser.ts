import { IMovieReduserState } from "Interfaces/interfaceRedux/state/movieState/IMovieReduserState";
import { movieActionName } from "Root/utils/other";

const initialState: IMovieReduserState = {
    popular: [],
    now_play: [],
    upcoming: [],
    top_rated: [],
    trailerMovie: [],
    detailsMovie: {},
    backgroundTrailer: '',
    trailerKey: '',
};

const movieReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case movieActionName.requestPopular: {
            return { 
                ...state,
                popular: state.popular.concat(action.payload),
            }
        }
        case movieActionName.requestPlayNow: {
            return {
                ...state,
                now_play: state.now_play.concat(action.payload),
            }
        }
        case movieActionName.requestUpcoming: {
            return {
                ...state,
                upcoming: state.upcoming.concat(action.payload),
            }
        }
        case movieActionName.requestTopRated: {
            return {
                ...state,
                top_rated: state.top_rated.concat(action.payload),
            }
        }
        case movieActionName.requestTrailer: {
            return {
                ...state,
                trailerMovie: state.trailerMovie.concat(action.payload)
            }
        }
        case movieActionName.setBackgroundTrailer: {
            return {
                ...state,
                backgroundTrailer: state.backgroundTrailer = action.payload
            }
        }
        case movieActionName.setKeyTrailer: {
            return {
                ...state,
                trailerKey: state.trailerKey = action.payload
            }
        }
        case movieActionName.requestDetailsMovie: {
            return {
                ...state,
                detailsMovie: state.detailsMovie = action.payload
            }
        }
        default:
            return state;
    }
};

export default movieReduser;