export enum MovieEnum {
    popular,
    now_play,
    upcoming,
    top_rated,
    pathname
};

export enum TVEnum {
    popular,
    airing_today,
    on_tv,
    top_rated
};

export const rootReduserName = {
    switchActiveMenu: 'SWITCH_ACTIVE_MENU',
    switchList: 'SWITCH_LIST',
    switchListTrailer: 'SWITCH_LIST_TRAILER',
    activeLoaderContent: 'ACTIVE_LOADER_CONTENT',
    disableLoaderContent: 'DISABLE_LOADER_CONTENT',
    activeMovieLoader: 'ACTIVE_LOADER_MOVIE',
    disableMovieLoader: 'DISABLE_LOADER_MOVIE',
}

export const movieActionName = {
    requestPopular: 'REQUEST_LIST_POPULAR_MOVIE',
    requestPlayNow: 'REQUEST_LIST_NOW_PLAY_MOVIE',
    requestUpcoming: 'REQUEST_LIST_UPCOMING_MOVIE',
    requestTopRated: 'REQUEST_LIST_TOP_RATED_MOVIE',
    requestTrailer: 'REQUEST_TRAILER_MOVIE',
    setBackgroundTrailer: 'BACKGROUND_TRAILER',
    setKeyTrailer: 'SWITCH_KEY_TRAILER',
    requestDetailsMovie: 'DETAILS_MOVIE',
    requestCastMovie: 'CAST_MOVIE',
    requestRecommendateMovies: 'REQUEST_LIST_RECOMMENDATED_MOVIE',
    requestGenresList: 'REQUEST_LIST_GENRES',
};

export const tvActionName = {
    requestPopular: 'REQUEST_LIST_POPULAR_TV',
    requestAiringTodayTV: 'REQUEST_LIST_AIRING_TODAY_TV',
    requestListOnTheAir: 'REQUEST_LIST_ON_THE_AIR_TV',
    requestTopRated: 'REQUEST_LIST_TOP_RATED_TV',
    requestTrailer: 'REQUEST_TRAILER_TV',
    setKeyTrailer: 'SWITCH_KEY_TRAILER_TV',
    requestDetailsTV: 'REQUEST_DETAILS_TV',
    setBackgroundTrailer: 'BACKGROUND_TRAILER_TV',
    requestCastTV: 'CAST_TV',
    requestRecommendateTV: 'REQUEST_LIST_RECOMMENDATED_TV',
    requestGenresList: 'REQUEST_LIST_GENRES',
};