import IRootReduserState from "Interfaces/interfaceRedux/state/rootState/IRootReduserState";
import { IActionSwitchMenu } from "Interfaces/interfaceRedux/IactionRootReduser";
import { rootReduserName } from "Root/utils/other";

const initialState: IRootReduserState = {
    listMenu: [
        { key: 'movie', name: 'Movie' },
        { key: 'tv', name: 'TV' },
    ],
    listMovieItem: [
        { key: 'popular', name: 'Popular', image: 'https://img.icons8.com/fluency/344/popular-topic.png' },
        { key: 'now play', name: 'Now Play', image: 'https://img.icons8.com/external-bearicons-flat-bearicons/344/external-Now-miscellany-texts-and-badges-bearicons-flat-bearicons.png' },
        { key: 'upcoming', name: 'Upcoming', image: 'https://img.icons8.com/color/344/coming-soon.png' },
        { key: 'top rated', name: 'Top Rated', image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-top-rated-customer-feedback-flaticons-lineal-color-flat-icons.png' },
    ],
    listTVItem: [
        { key: 'popular', name: 'Popular', image: 'https://img.icons8.com/fluency/344/popular-topic.png' },
        { key: 'airing today', name: 'Aring Today', image: 'https://img.icons8.com/officel/344/hdtv.png' },
        { key: 'onTV', name: 'On TV', image: 'https://img.icons8.com/color-glass/344/tv-show.png' },
        { key: 'top rated', name: 'Top Rated', image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-top-rated-customer-feedback-flaticons-lineal-color-flat-icons.png' },
    ],
    activeMenu: '',
    activeListStartPage: 'theater',
    activeListStartTrailer: 'theater',
    contentLoader: false,
    movieLoader: false
}

const rootReduser = (state = initialState, action: IActionSwitchMenu) => {
    switch (action.type) {
        case rootReduserName.switchActiveMenu: {
            return {
                ...state,
                activeMenu: action.payload
            }
        }
        case rootReduserName.switchList: {
            return {
                ...state,
                activeListStartPage: action.payload
            }
        }
        case rootReduserName.switchListTrailer: {
            return {
                ...state,
                activeListStartTrailer: action.payload
            }
        }
        case rootReduserName.activeLoaderContent: {
            return {
                ...state,
                contentLoader: true
            }
        }
        case rootReduserName.disableLoaderContent: {
            return {
                ...state,
                contentLoader: false
            }
        }
        case rootReduserName.activeMovieLoader: {
            return {
                ...state,
                movieLoader: true
            }
        }
        case rootReduserName.disableMovieLoader: {
            return {
                ...state,
                movieLoader: false
            }
        }
        default:
            return state;
    }
};

export default rootReduser;