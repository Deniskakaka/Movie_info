import { ITV, ITrailerTV, IDetailTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";

export interface ITVStateReduser {
    popular: ITV[],
    airing_today: ITV[],
    TV_on_the_air: ITV[],
    top_rated: ITV[],
    trailerTV: ITrailerTV[],
    trailerKey: string,
    detailsTV: IDetailTV | {},
    backgroundTrailer: string
}