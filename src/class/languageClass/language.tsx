import { ILanguage } from "Root/interfaces/interfaceClassMovie/interfaceLanguage";

export class Language implements ILanguage {
    iso: string;
    name: string;
    
    constructor(iso: string, name: string) {
        this.iso = iso,
        this.name = name
    }
}