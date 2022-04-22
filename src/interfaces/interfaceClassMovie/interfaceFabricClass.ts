import { ICreatedBy, IlastEpisodTV, INetworks, IProductionCompany, IProductionCompanyTV, ISeason } from "../interfaceGlobalObject/globalObjectsInterfaces";
import { IDetailMovie, ITrailerMovie } from "./interfaceMovie";
import { IDetailTV, ITrailerTV } from "./interfaceTV";

export interface IfabricTrailer {
    returnTrailerMovie(
        name: string,
        key: string,
        published_at: string,
        id: string,
        nameMovie: string,
        poster: string,
    ): ITrailerMovie,
    returnTrailerTV(
        name: string,
        key: string,
        published_at: string,
        id: string,
        nameMovie: string,
        poster: string,
    ): ITrailerTV,
};

export interface IfabricaDetails {
    returnDetailsMovie(
        backdrop_path: string,
        budget: number,
        id: number,
        overview: string,
        production_companies: IProductionCompany[],
        release_date: string,
        runtime: number,
        spoken_languages: { name: string }[],
        title: string,
        vote_average: number,
        homepage: string,
        revenue: number,
        original_language: string,
        genres: { id: number, name: string }[],
        status: string,
        links: { facebook: string, twitter: string, instagram: string }
    ): IDetailMovie,
    returnDetailsTV(
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
    ): IDetailTV,
}