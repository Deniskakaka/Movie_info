import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import { IDetailMovie, IMovie, IRecommendationMovie, ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";

export interface IMovieReduserState {
    popular: IMovie[],
    now_play: IMovie[],
    upcoming: IMovie[],
    top_rated: IMovie[],
    trailerMovie: ITrailerMovie[],
    detailsMovie: IDetailMovie,
    backgroundTrailer: string,
    trailerKey: string,
    cast: ICast[],
    recommendationMovies: IRecommendationMovie[]
};