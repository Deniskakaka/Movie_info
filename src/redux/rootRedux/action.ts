import { rootReduserName } from "Root/utils/other";

export const switchActiveMenu = (name: string) => {
    return {
        type: rootReduserName.switchActiveMenu,
        payload: name
    }
};

export const switchListStartPage = (name: string) => {
    return {
        type: rootReduserName.switchList,
        payload: name,
    }
};

export const switchListTrailer = (name: string) => {
    return {
        type: rootReduserName.switchListTrailer,
        payload: name,
    }
};

export const activeLoaderContent = () => {
    return {
        type: rootReduserName.activeLoaderContent,
    }
};

export const disableLoaderContent = () => {
    return {
        type: rootReduserName.disableLoaderContent
    }
};

export const activeLoaderMovie = () => {
    return {
        type: rootReduserName.activeMovieLoader
    }
};

export const disableLoaderMovie = () => {
    return {
        type: rootReduserName.disableMovieLoader
    }
}