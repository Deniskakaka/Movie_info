import { IMovieReduserState } from "./interfaceRedux/state/movieState/IMovieReduserState";
import IRootReduserState from "./interfaceRedux/state/rootState/IRootReduserState";
import { ITVStateReduser } from "./interfaceRedux/state/tvState/ITVStateReduser";

export interface IglobalReduser {
    rootReduser: IRootReduserState,
    movieReduser: IMovieReduserState,
    tvReduser: ITVStateReduser,
}