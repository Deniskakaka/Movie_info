import { IMenu, IMovieMenu, ITVMenu } from "Interfaces/interfaceGlobalObject/globalObjectsInterfaces";

interface IRootReduserState  {
    listMenu: IMenu[],
    listMovieItem: IMovieMenu[],
    listTVItem: ITVMenu[],
    activeMenu: string,
    activeListStartPage: string,
    activeListStartTrailer: string,
    contentLoader: boolean,
    movieLoader: boolean,
};

export default IRootReduserState;