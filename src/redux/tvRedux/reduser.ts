import { ITVStateReduser } from "Interfaces/interfaceRedux/state/tvState/ITVStateReduser";

const initialState: ITVStateReduser = {
    popular: [],
    airing_today: [],
    TV_on_the_air: [],
    top_rated: [],
    trailerTV: [],
    trailerKey: '',
    detailsTV: {}
};

const tvReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case 'REQUEST_LIST_POPULAR_TV': {
            return {
                ...state,
                popular: state.popular.concat(action.payload),
            }
        }
        case 'REQUEST_LIST_AIRING_TODAY_TV': {
            return {
                ...state,
                airing_today: state.airing_today.concat(action.payload),
            }
        }
        case 'REQUEST_LIST_ON_THE_AIR_TV': {
            return {
                ...state,
                TV_on_the_air: state.TV_on_the_air.concat(action.payload),
            }
        }
        case 'REQUEST_LIST_TOP_RATED_TV': {
            return {
                ...state,
                top_rated: state.top_rated.concat(action.payload),
            }
        }
        case 'REQUEST_TRAILER_TV': {
            return {
                ...state,
                trailerTV: state.trailerTV.concat(action.payload)
            }
        }
        case 'SWITCH_KEY_TRAILER_TV': {
            return {
                ...state,
                trailerKey: state.trailerKey = action.payload
            }
        }
        case 'REQUEST_DETAILS_TV': {
            return {
                ...state,
                detailsTV: state.detailsTV = action.payload
            }
        }
        default:
            return state;
    }
}

export default tvReduser;