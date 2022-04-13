import { ITVStateReduser } from "Interfaces/interfaceRedux/state/tvState/ITVStateReduser";
import { tvActionName } from "Root/utils/other";

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
        case tvActionName.requestPopular: {
            return {
                ...state,
                popular: state.popular.concat(action.payload),
            }
        }
        case tvActionName.requestAiringTodayTV: {
            return {
                ...state,
                airing_today: state.airing_today.concat(action.payload),
            }
        }
        case tvActionName.requestListOnTheAir: {
            return {
                ...state,
                TV_on_the_air: state.TV_on_the_air.concat(action.payload),
            }
        }
        case tvActionName.requestTopRated: {
            return {
                ...state,
                top_rated: state.top_rated.concat(action.payload),
            }
        }
        case tvActionName.requestTrailer: {
            return {
                ...state,
                trailerTV: state.trailerTV.concat(action.payload)
            }
        }
        case tvActionName.setKeyTrailer: {
            return {
                ...state,
                trailerKey: state.trailerKey = action.payload
            }
        }
        case tvActionName.requestDetailsTV: {
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