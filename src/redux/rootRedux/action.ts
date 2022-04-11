export const switchActiveMenu = (name: string) => {
    return {
        type: 'SWITCH_ACTIVE_MENU',
        payload: name
    }
};

export const switchListStartPage = (name: string) => {
    return {
        type: 'SWITCH_LIST',
        payload: name,
    }
};

export const switchListTrailer = (name: string) => {
    return {
        type: 'SWITCH_LIST_TRAILER',
        payload: name,
    }
};