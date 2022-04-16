import { GlobalProperty, ICreatedBy, IlastEpisodTV, INetworks, IProductionCompanyTV, ISeason } from "Interfaces/interfaceGlobalObject/globalObjectsInterfaces";
import { ITrailerMovie } from "./interfaceMovie";

export interface ITV extends GlobalProperty{
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
};

export interface ITrailerTV {
    name: string,
    key: string,
    published_at: string,
    id: string,
    nameMovie: string,
    poster: string
}

export interface IDetailTV {
    backdrop_path: string,
    created_by: ICreatedBy[],
    first_air_date: string,
    homepage: string,
    episode_run_time: number[],
    languages: string[],
    last_episode_to_air: IlastEpisodTV,
    name: string,
    networks: INetworks[],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string,
    original_name: string,
    overview: string,
    poster_path: string,
    production_companies: IProductionCompanyTV[],
    seasons: ISeason[],
    vote_average: number
}