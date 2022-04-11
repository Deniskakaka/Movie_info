import { IMovie, ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";

export interface IMovieReduserState {
    popular: IMovie[],
    now_play: IMovie[],
    upcoming: IMovie[],
    top_rated: IMovie[],
    trailerMovie: ITrailerMovie[],
    backgroundTrailer: string,
    trailerKey: string,
    error: boolean,
};