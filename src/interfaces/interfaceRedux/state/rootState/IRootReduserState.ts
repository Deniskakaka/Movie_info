import { IMenu, IMovieMenu, ITVMenu } from "Interfaces/interfaceGlobalObject/globalObjectsInterfaces";

interface IRootReduserState  {
    listMenu: IMenu[],
    listMovieItem: IMovieMenu[],
    listTVItem: ITVMenu[],
    activeMenu: string,
    activeListStartPage: string,
    activeListStartTrailer: string,
};

export default IRootReduserState;