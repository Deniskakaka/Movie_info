import { ITrailerMovie } from "./interfaceMovie";

export interface ITV {
    poster_path: string,
    id: number,
    backdrop_path: string,
    vote_average: number,
    overview: string,
    first_air_date: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    trailer: ITrailerMovie[] | []

    getBackdrop_path(): string,
    getPoster_path(): string,
    getRelease_date(): string,
    getVote_average(): number,
};

export interface ITrailerTV {
    name: string,
    key: string,
    published_at: string,
    id: string,
    nameMovie: string,
    poster: string
}