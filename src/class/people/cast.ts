import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";

export class Cast implements ICast {
    id: number;
    known_for_department: string;
    name: string;
    profile_path: string;
    character: string;

    constructor(
        id: number,
        known_for_department: string,
        name: string,
        profile_path: string,
        character: string,
    ) {
        this.id = id,
            this.known_for_department = known_for_department,
            this.name = name,
            this.profile_path = profile_path,
            this.character = character
    }

    getBackdrop_path = () => `https://image.tmdb.org/t/p/original/${this.profile_path}`;
}