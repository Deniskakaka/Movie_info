export enum MovieEnum {
    popular,
    now_play,
    upcoming,
    top_rated
}

export enum TVEnum {
    popular,
    airing_today,
    on_the_air,
    top_rated
}

export const movieActionName = {
    requestPopular: 'REQUEST_LIST_POPULAR_MOVIE',
    requestPlayNow: 'REQUEST_LIST_NOW_PLAY_MOVIE',
    requestUpcoming: 'REQUEST_LIST_UPCOMING_MOVIE',
    requestTopRated: 'REQUEST_LIST_TOP_RATED_MOVIE',
    requestTrailer: 'REQUEST_TRAILER_MOVIE',
    setBackgroundTrailer: 'BACKGROUND_TRAILER',
    setKeyTrailer: 'SWITCH_KEY_TRAILER',
    requestDetailsMovie: 'DETAILS_MOVIE'
}

export const tvActionName = {
    requestPopular: 'REQUEST_LIST_POPULAR_TV',
    requestAiringTodayTV: 'REQUEST_LIST_AIRING_TODAY_TV',
    requestListOnTheAir: 'REQUEST_LIST_ON_THE_AIR_TV',
    requestTopRated: 'REQUEST_LIST_TOP_RATED_TV',
    requestTrailer: 'REQUEST_TRAILER_TV',
    setKeyTrailer: 'SWITCH_KEY_TRAILER_TV',
    requestDetailsTV: 'REQUEST_DETAILS_TV'
}