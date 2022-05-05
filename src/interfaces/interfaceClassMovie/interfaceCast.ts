export interface ICast {
    id: number,
    known_for_department: string,
    name: string,
    profile_path: string,
    character: string,
    getBackdrop_path(): string,
    roles?: {character: string, episode_count: number, credit_id: string}[]
};