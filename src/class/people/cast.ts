import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";

export class Cast implements ICast {
    id: number;
    known_for_department: string;
    name: string;
    profile_path: string;
    character: string;
    roles?: { character: string, episode_count: number, credit_id: string }[]

    constructor(
        id: number,
        known_for_department: string,
        name: string,
        profile_path: string,
        character: string,
        roles?: { character: string, episode_count: number, credit_id: string }[]
    ) {
        this.id = id,
            this.known_for_department = known_for_department,
            this.name = name,
            this.profile_path = profile_path,
            this.character = character,
            this.roles = roles
    }

    getBackdrop_path = () => `https://image.tmdb.org/t/p/original/${this.profile_path}`;
}