import { IfabricaDetails, IfabricTrailer } from "Root/interfaces/interfaceClassMovie/interfaceFabricClass";
import { IDetailMovie, ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { IDetailTV, ITrailerTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import { IProductionCompany, ICreatedBy, IlastEpisodTV, INetworks, IProductionCompanyTV, ISeason } from "Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces";
import DetailsMovie from "./detailsClasses/detailsMovie";
import DetailTV from "./detailsClasses/detailsTV";
import TrailerMovie from "./trailerClasses/trailerMovie";
import TrailerTV from "./trailerClasses/trailerTV";

export class fabricTrailer implements IfabricTrailer {
    returnTrailerMovie(
        name: string,
        key: string,
        published_at: string,
        id: string,
        nameMovie: string,
        poster: string,
    ): ITrailerMovie {
        return new TrailerMovie(
            name,
            key,
            published_at,
            id,
            nameMovie,
            poster,
        );
    }
    returnTrailerTV(
        name: string,
        key: string,
        published_at: string,
        id: string,
        nameMovie: string,
        poster: string,
    ): ITrailerTV {
        return new TrailerTV(
            name,
            key,
            published_at,
            id,
            nameMovie,
            poster,
        );
    }
}

export class DetailsFabric implements IfabricaDetails {
    returnDetailsMovie(
        backdrop_path: string,
        budget: number,
        id: number,
        overview: string,
        production_companies: IProductionCompany[],
        release_date: string,
        runtime: number,
        spoken_languages: { name: string; }[],
        title: string,
        vote_average: number,
        homepage: string,
        revenue: number,
        original_language: string,
        genres: { id: number, name: string }[],
        status: string): IDetailMovie {
        return new DetailsMovie(
            backdrop_path,
            budget,
            id,
            overview,
            production_companies,
            release_date,
            runtime,
            spoken_languages,
            title,
            vote_average,
            homepage,
            revenue,
            original_language,
            genres,
            status
        )
    }
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
        vote_average: number): IDetailTV {
        return new DetailTV(backdrop_path,
            created_by,
            first_air_date,
            homepage,
            episode_run_time,
            languages,
            last_episode_to_air,
            name,
            networks,
            number_of_episodes,
            number_of_seasons,
            origin_country,
            original_name,
            overview,
            poster_path,
            production_companies,
            seasons,
            vote_average)
    }
};