import IRootReduserState from "Interfaces/interfaceRedux/state/rootState/IRootReduserState";
import { IActionSwitchMenu } from "Interfaces/interfaceRedux/IactionRootReduser";
import { rootReduserName } from "Root/utils/other";
import { Menu, MovieMenu } from "Root/class/previewClasses/movie";
import { MenuTV } from "Root/class/previewClasses/tv";

const initialState: IRootReduserState = {
    listMenu: [
        new Menu('movie', 'Movie'),
        new Menu('tv', 'TV'),
    ],
    listMovieItem: [
        new MovieMenu('popular', 'Popular', 'https://img.icons8.com/fluency/344/popular-topic.png'),
        new MovieMenu('now play', 'Now Play', 'https://img.icons8.com/external-bearicons-flat-bearicons/344/external-Now-miscellany-texts-and-badges-bearicons-flat-bearicons.png'),
        new MovieMenu('upcoming', 'Upcoming', 'https://img.icons8.com/color/344/coming-soon.png'),
        new MovieMenu('top rated', 'Top Rated', 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-top-rated-customer-feedback-flaticons-lineal-color-flat-icons.png')
    ],
    listTVItem: [
        new MenuTV('popular', 'Popular', 'https://img.icons8.com/fluency/344/popular-topic.png'),
        new MenuTV('airing today', 'Aring Today', 'https://img.icons8.com/officel/344/hdtv.png'),
        new MenuTV('onTV', 'On TV', 'https://img.icons8.com/color-glass/344/tv-show.png'),
        new MenuTV('top rated', 'Top Rated', 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-top-rated-customer-feedback-flaticons-lineal-color-flat-icons.png')
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