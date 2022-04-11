import { ITV } from "../interfaceClassMovie/interfaceTV";

export interface IActionSwitchMenu {
    type: string,
    payload: string,
}

export interface ITVAction {
    type: string,
    payload: ITV,
}