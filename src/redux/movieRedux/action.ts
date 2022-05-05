import { Dispatch, Action } from 'redux';
import DetailsMovie, { RecommendationMovie } from 'Root/class/detailsClasses/detailsMovie';
import ProductionCompany from "Root/class/companies/CompanyClass";
import { Movie } from "Root/class/previewClasses/movie";
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import { IDetailMovie, IMovie, IRecommendationMovie, ITrailerMovie } from 'Root/interfaces/interfaceClassMovie/interfaceMovie';
import { IProductionCompany } from 'Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces';
import { requestCastMovie, requestDetailsMovie, requestRecommendateMovies } from 'Root/utils/requestFunction';
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
            if (name === MovieEnum.popular && requestPopularList) {
                dispatch(actionMovieList(result, movieActionName.requestPopular));
            }
            if (name === MovieEnum.now_play && requestNowPlayList) {
                dispatch(actionMovieList(result, movieActionName.requestPlayNow));
            }
            if (name === MovieEnum.upcoming && requestUpcomingList) {
                dispatch(actionMovieList(result, movieActionName.requestUpcoming));
            }
            if (name === MovieEnum.top_rated && requestTopRatedList) {
                dispatch(actionMovieList(result, movieActionName.requestTopRated));
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