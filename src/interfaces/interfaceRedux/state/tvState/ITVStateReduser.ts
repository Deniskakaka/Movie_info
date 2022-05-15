import TV from "Root/class/previewClasses/tv";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import { ITV, ITrailerTV, IDetailTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import { IRecommendationTV } from "Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces";

export interface ITVStateReduser {
    popular: TV[],
    airing_today: TV[],
    TV_on_the_air: TV[],
    top_rated: TV[],
    trailerTV: ITrailerTV[],
    trailerKey: string,
    detailsTV: IDetailTV,
    backgroundTrailer: string,
    cast: ICast[],
    genres: { id: number, name: string }[]
    recommendatesTV: IRecommendationTV[]
}