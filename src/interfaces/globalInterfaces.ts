import { IMovieReduserState } from "./interfaceRedux/state/movieState/IMovieReduserState";
import IRootReduserState from "./interfaceRedux/state/rootState/IRootReduserState";

export interface IglobalReduser {
    rootReduser: IRootReduserState,
    movieReduser: IMovieReduserState
}