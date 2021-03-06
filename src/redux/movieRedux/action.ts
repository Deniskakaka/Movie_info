import { Dispatch, Action } from 'redux';
import DetailsMovie, { RecommendationMovie } from 'Root/class/detailsClasses/detailsMovie';
import ProductionCompany from "Root/class/companies/CompanyClass";
import { Movie } from "Root/class/previewClasses/movie";
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import { IDetailMovie, IMovie, IRecommendationMovie, ITrailerMovie } from 'Root/interfaces/interfaceClassMovie/interfaceMovie';
import { IProductionCompany } from 'Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces';
import { requestCastMovie, requestDetailsMovie, requestGenresMovie, requestRecommendateMovies } from 'Root/utils/requestFunction';
import { MovieEnum, movieActionName, TVEnum } from "Root/utils/other";
import { DetailsFabric, FabricaRecommendates } from "Root/class/fabricClass";
import { ICast } from 'Root/interfaces/interfaceClassMovie/interfaceCast';
import { Cast } from 'Root/class/people/cast';

//trailers actions
export const actionTrailer = (trailer: ITrailerMovie) => {
    return {
        type: movieActionName.requestTrailer,
        payload: trailer
    }
};

export const actionBackgroundTrailer = (image: string) => {
    return {
        type: movieActionName.setBackgroundTrailer,
        payload: image
    }
};

export const actionSwitchKeyTrailer = (key: string) => {
    return {
        type: movieActionName.setKeyTrailer,
        payload: key
    }
};

//action details movie
export const actionDetailsMovie = (details: IDetailMovie) => {
    return {
        type: movieActionName.requestDetailsMovie,
        payload: details
    }
};

export const actionRequestDetailsMovie = (id: number): (dispatch: Dispatch<Action>) => void => {
    return (dispatch: Dispatch<Action>): void => {
        requestDetailsMovie(id).then(res => {
            const result = new DetailsFabric().returnDetailsMovie(
                res.data.backdrop_path,
                res.data.budget,
                res.data.id,
                res.data.overview,
                res.data.production_companies.map((el: IProductionCompany) =>
                    new ProductionCompany(el.id, el.name, el.logo_path)),
                res.data.release_date,
                res.data.runtime,
                res.data.spoken_languages,
                res.data.title,
                res.data.vote_average,
                res.data.homepage,
                res.data.revenue,
                res.data.original_language,
                res.data.genres,
                res.data.status,
            );
            dispatch(actionDetailsMovie(result));
        });
    }
};

//zeroing lists
const zeroingPopularMoviesList = () => {
    return {
        type: movieActionName.zeroingPopularMovieList
    }
};

const zeroingPlayNowMoviesList = () => {
    return {
        type: movieActionName.zeroingPlayNow
    }
};

const zeroingUpComingMovieList = () => {
    return {
        type: movieActionName.zeroingUpComing
    }
};

const zeroingTopRatingMoviesList = () => {
    return {
        type: movieActionName.zeroingTopRating
    }
}

//action lists movie
const actionMovieList = (listMovie: IMovie, type: string) => {
    return {
        type: type,
        payload: listMovie,
    }
};

export const actionRequestMovie = (
    count: number,
    requestFunc: (count: number) => Promise<any>,
    name: MovieEnum | TVEnum) => {
    return (dispatch: Dispatch<any>, getState: () => IglobalReduser): void => {
        const requestPopularList = getState().movieReduser.popular.length !== count * 20;
        const requestNowPlayList = getState().movieReduser.now_play.length !== count * 20;
        const requestUpcomingList = getState().movieReduser.upcoming.length !== count * 20;
        const requestTopRatedList = getState().movieReduser.top_rated.length !== count * 20;
<<<<<<< HEAD
        const popularListLength = getState().movieReduser.popular.length;
        const nowPlayListLength = getState().movieReduser.now_play.length;
        const upComingListLength = getState().movieReduser.upcoming.length;
        const topRatedListLength = getState().movieReduser.top_rated.length;
=======
        dispatch(actionRequestGenresList());
>>>>>>> 27ff31e0999b126a048481271690dbcbef54c5f6

        requestFunc(count).then((res: any) => {
            const genresList = getState().movieReduser.genres;
            const result = res.data.results.map((el: any) => new Movie(
                el.backdrop_path,
                el.id,
                el.original_language,
                el.original_title,
                el.overview,
                el.poster_path,
                el.release_date,
                el.vote_average,
                el.genre_ids
            ));
            result.map((el:Movie) => el.setCertification(el.id));
            result.map((el: Movie) => {
                genresList.forEach((q: { id: number, name: string }) => {
                    if (el.genre_ids.includes(q.id)) el.setGenres(q.name);
                });
                return el;
            });
            result.map((el: Movie) => el.setRuntime(el.id));
            if (name === MovieEnum.popular && requestPopularList) {
                if (popularListLength > 20 && count === 1) {
                    dispatch(zeroingPopularMoviesList());
                    dispatch(actionMovieList(result, movieActionName.requestPopular));
                } else {
                    dispatch(actionMovieList(result, movieActionName.requestPopular));
                }
            }
            if (name === MovieEnum.now_play && requestNowPlayList) {
                if (nowPlayListLength > 20 && count === 1) {
                    dispatch(zeroingPlayNowMoviesList());
                    dispatch(actionMovieList(result, movieActionName.requestPlayNow));
                }
                else {
                    dispatch(actionMovieList(result, movieActionName.requestPlayNow));
                }
            }
            if (name === MovieEnum.upcoming && requestUpcomingList) {
                if (upComingListLength > 20 && count === 1) {
                    dispatch(zeroingUpComingMovieList());
                    dispatch(actionMovieList(result, movieActionName.requestUpcoming));
                }
                else {
                    dispatch(actionMovieList(result, movieActionName.requestUpcoming));
                }
            }
            if (name === MovieEnum.top_rated && requestTopRatedList) {
                if (topRatedListLength > 20 && count === 1) {
                    dispatch(zeroingTopRatingMoviesList());
                    dispatch(actionMovieList(result, movieActionName.requestTopRated));
                }
                else {
                    dispatch(actionMovieList(result, movieActionName.requestTopRated));
                }
            }
        });
    }
};


//people movie
const actionCastMovie = (cast: ICast) => {
    return {
        type: movieActionName.requestCastMovie,
        payload: cast
    }
}

export const actionRequestCastMovie = (id: number) => {
    return (dispatch: Dispatch<Action>): void => {
        requestCastMovie(id).then(res => {
            const cast = res.data.cast.map((el: ICast) => {
                return new Cast(
                    el.id,
                    el.known_for_department,
                    el.name,
                    el.profile_path,
                    el.character)
            });
            const crew = res.data.crew.map((el: ICast) => {
                return new Cast(
                    el.id,
                    el.known_for_department,
                    el.name,
                    el.profile_path,
                    el.character)
            });
            dispatch(actionCastMovie(cast.concat(crew)));
        })
    }
}

//recommendate movies
export const actionRecommendateMovies = (recommendate: IRecommendationMovie[]) => {
    return {
        type: movieActionName.requestRecommendateMovies,
        payload: recommendate
    }
};

export const actionRequestListRecommendateMovies = (id: number, count: number) => {
    return (dispatch: Dispatch<Action>): void => {
        if (count === 0) dispatch(actionRecommendateMovies([]));
        else requestRecommendateMovies(id, count).then(res => {
            const result = res.data.results.map((el: any) => new FabricaRecommendates()
                .returnRecommendatesMovie(
                    el.title,
                    el.release_date,
                    el.vote_average,
                    el.id,
                    el.poster_path));
            dispatch(actionRecommendateMovies(result));
        });
    }
};

//genres

const actionGenres = (list: { id: number, name: string }[]) => {
    return {
        type: movieActionName.requestGenresList,
        payload: list
    }
};

export const actionRequestGenresList = () => {
    return (dispatch: Dispatch<Action>) => {
        requestGenresMovie().then(res => dispatch(actionGenres(res.data.genres)));
    }
};