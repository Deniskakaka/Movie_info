import { Dispatch, Action } from 'redux';
import { Movie } from "Root/class/movie";
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import { IMovie, ITrailerMovie } from 'Root/interfaces/interfaceClassMovie/interfaceMovie';

const actionMovieList = (listMovie: IMovie, type: string) => {
    return {
        type: type,
        payload: listMovie,
    }
};

export const actionTrailer = (trailer:ITrailerMovie) => {
    return {
        type: 'REQUEST_TRAILER_MOVIE',
        payload: trailer
    }
};

export const actionBackgroundTrailer = (image: string) => {
    return {
        type: 'BACKGROUND_TRAILER',
        payload: image
    }
};

export const actionSwitchKeyTrailer = (key: string) => {
    return {
        type: 'SWITCH_KEY_TRAILER',
        payload: key
    }
};

const actionError = () => {
    return {
        type: 'ACTIVE_ERROR',
        payload: true
    }
}

export const actionRequestMovie = (
    count: number,
    requestFunc: (count: number) => Promise<any>,
    name: string) => {
    return (dispatch: Dispatch<Action>, getState: () => IglobalReduser): void => {
        const requestPopularList = getState().movieReduser.popular.length !== count * 20;
        const requestNowPlayList = getState().movieReduser.now_play.length !== count * 20;
        const requestUpcomingList = getState().movieReduser.upcoming.length !== count * 20;
        const requestTopRatedList = getState().movieReduser.top_rated.length !== count * 20;

        requestFunc(count).then((res: any) => {
            const result = res.data.results.map((el: any) => new Movie(
                el.backdrop_path,
                el.id,
                el.original_language,
                el.original_title,
                el.overview,
                el.poster_path,
                el.release_date,
                el.vote_average,
            ));
            if (name === 'popular' && requestPopularList) return dispatch(actionMovieList(result, 'REQUEST_LIST_POPULAR_MOVIE'));
            if (name === 'now_play' && requestNowPlayList) return dispatch(actionMovieList(result, 'REQUEST_LIST_NOW_PLAY_MOVIE'));
            if (name === 'upcoming' && requestUpcomingList) return dispatch(actionMovieList(result, 'REQUEST_LIST_UPCOMING_MOVIE'));
            if (name === 'top_rated' && requestTopRatedList) return dispatch(actionMovieList(result, 'REQUEST_LIST_TOP_RATED_MOVIE'));
        }).catch((error) => {
            dispatch(actionError());
        });
    }
};
