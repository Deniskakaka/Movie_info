
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Preview from "Root/components/ui/Preview";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import { actionRequestMovie } from "Root/redux/movieRedux/action";
import { actionRequestTV } from "Root/redux/tvRedux/action";
import { MovieEnum, TVEnum } from "Root/utils/other";
import { airingTodayRequest, nowPlayMovieRequest, popularMovieRequest, popularTVRequest, topRatedMovieRequest, tvOnTheAirRequest, tvTopRatedRequest, upcomingMovieRequest } from "Root/utils/requestFunction";

const List = () => {
    const location = useLocation().pathname;
    const dispatch = useDispatch();
    const popularMovie = useSelector((state: IglobalReduser) => state.movieReduser.popular);
    const nowPlayMovie = useSelector((state: IglobalReduser) => state.movieReduser.now_play);
    const upComingMovie = useSelector((state: IglobalReduser) => state.movieReduser.upcoming);
    const topRatedMovie = useSelector((state: IglobalReduser) => state.movieReduser.top_rated);
    const popularTV = useSelector((state: IglobalReduser) => state.tvReduser.popular);
    const airingTodayTV = useSelector((state: IglobalReduser) => state.tvReduser.airing_today);
    const onTV = useSelector((state: IglobalReduser) => state.tvReduser.TV_on_the_air);
    const topRatedTV = useSelector((state: IglobalReduser) => state.tvReduser.top_rated);

    const returnList = (pathname: string) => {
        if (location.includes('movie')) {
            if (pathname.toLocaleLowerCase().includes('popular')) return popularMovie;
            if (pathname.toLocaleLowerCase().includes('now_play')) return nowPlayMovie;
            if (pathname.toLocaleLowerCase().includes('upcoming')) return upComingMovie;
            if (pathname.toLocaleLowerCase().includes('top_rated')) return topRatedMovie;
        }
        if (location.includes('tv')) {
            if (pathname.toLocaleLowerCase().includes('popular')) return popularTV;
            if (pathname.toLocaleLowerCase().includes('aring_today')) return airingTodayTV;
            if (pathname.toLocaleLowerCase().includes('on_tv')) return onTV;
            if (pathname.toLocaleLowerCase().includes('top_rated')) return topRatedTV;
        }
        else return [];
    };

    const returnPromise = (pathname: string) => {
        if (location.includes('movie')) {
            if (pathname.toLocaleLowerCase().includes('popular')) return popularMovieRequest;
            if (pathname.toLocaleLowerCase().includes('now_play')) return nowPlayMovieRequest;
            if (pathname.toLocaleLowerCase().includes('upcoming')) return upcomingMovieRequest;
            if (pathname.toLocaleLowerCase().includes('top_rated')) return topRatedMovieRequest;
        }
        if (location.includes('tv')) {
            if (pathname.toLocaleLowerCase().includes('popular')) return popularTVRequest;
            if (pathname.toLocaleLowerCase().includes('aring_today')) return airingTodayRequest;
            if (pathname.toLocaleLowerCase().includes('on_tv')) return tvOnTheAirRequest;
            if (pathname.toLocaleLowerCase().includes('top_rated')) return tvTopRatedRequest;
        }
    };

    const returnName = (pathname: string) => {
        if (location.includes('movie')) {
            if (pathname.toLocaleLowerCase().includes('popular')) return MovieEnum.popular
            if (pathname.toLocaleLowerCase().includes('now_play')) return MovieEnum.now_play;
            if (pathname.toLocaleLowerCase().includes('upcoming')) return MovieEnum.upcoming;
            if (pathname.toLocaleLowerCase().includes('top_rated')) return MovieEnum.top_rated;
        }
        if (location.includes('tv')) {
            if (pathname.toLocaleLowerCase().includes('popular')) return TVEnum.popular;
            if (pathname.toLocaleLowerCase().includes('aring_today')) return TVEnum.airing_today;
            if (pathname.toLocaleLowerCase().includes('on_tv')) return TVEnum.on_the_air;
            if (pathname.toLocaleLowerCase().includes('top_rated')) return TVEnum.top_rated;
        }
    }

    useEffect(() => {
        if (location.includes('movie')) dispatch(actionRequestMovie(1, returnPromise(location), returnName(location)));
        if (location.includes('tv')) dispatch(actionRequestTV(1, returnPromise(location), returnName(location)));
    }, [location]);

    return (<Preview listMovies={returnList(location)} pathname={location} />)
};

export default List;