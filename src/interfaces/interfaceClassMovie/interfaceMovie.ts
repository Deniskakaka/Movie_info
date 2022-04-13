import { IProductionCompany } from "Interfaces/interfaceGlobalObject/globalObjectsInterfaces";

export interface IMovie {
    backdrop_path: string,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number,

    getBackdrop_path(): string,
    getPoster_path(): string,
    getRelease_date(): string,
    getVote_average(): number,
};

export interface ITrailerMovie {
    name: string,
    key: string,
    published_at: string,
    id: string,
    nameMovie: string,
    poster: string
};

export interface IDetailMovie {
    backdrop_path: string,
    budget: number,
    id: number,
    overview: string,
    production_companies: IProductionCompany[],
    release_date: string,
    runtime:  number,
    spoken_languages: { name: string }[],
    title: string,
    vote_average: number,
    homepage: string
}