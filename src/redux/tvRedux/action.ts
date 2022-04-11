import { Dispatch, Action } from 'redux';
import TV from 'Root/class/tv';
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import { ITV, ITrailerTV } from 'Root/interfaces/interfaceClassMovie/interfaceTV';

const actionMovieList = (listTV: ITV, type: string) => {
    return {
        type: type,
        payload: listTV,
    }
};

export const actionTrailerTV = (trailer: ITrailerTV) => {
    return {
        type: 'REQUEST_TRAILER_TV',
        payload: trailer
    }
};

export const actionSwitchKeyTrailerTV = (key: string) => {
    return {
        type: 'SWITCH_KEY_TRAILER_TV',
        payload: key
    }
};


export const actionRequestTV = (
    count: number,
    requestFunc: (count: number) => Promise<any>,
    name: string) => {
    return (dispatch: Dispatch<Action>, getState: () => IglobalReduser): void => {
        const requestPopularList = getState().tvReduser.popular.length !== count * 20;
        const requestAiringTodayList = getState().tvReduser.airing_today.length !== count * 20;
        const requestOnTheAirList = getState().tvReduser.TV_on_the_air.length !== count * 20;
        const requestTopRatedList = getState().movieReduser.top_rated.length !== count * 20;

        requestFunc(count).then((res: any) => {
            const result = res.data.results.map((el: any) => new TV(
                el.poster_path,
                el.id,
                el.backdrop_path,
                el.vote_average,
                el.first_air_date,
                el.origin_country,
                el.original_language,
                el.name));
             if (name === 'popular' && requestPopularList) return dispatch(actionMovieList(result, 'REQUEST_LIST_POPULAR_TV'));
             if (name === 'airing_today' && requestAiringTodayList) return dispatch(actionMovieList(result, 'REQUEST_LIST_AIRING_TODAY_TV'));
             if (name === 'on_the_air' && requestOnTheAirList) return dispatch(actionMovieList(result, 'REQUEST_LIST_ON_THE_AIR_TV'));
             if (name === 'top_rated' && requestTopRatedList) return dispatch(actionMovieList(result, 'REQUEST_LIST_TOP_RATED_TV'));
        })
    }
};