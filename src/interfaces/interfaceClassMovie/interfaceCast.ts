export interface ICast {
    id: number,
    known_for_department: string,
    name: string,
    profile_path: string,
    character: string,
    getBackdrop_path(): string
};