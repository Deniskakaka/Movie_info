import { Cast } from "Root/class/people/cast";
import DetailsMovie from "Root/class/detailsClasses/detailsMovie";
import DetailTV from "Root/class/detailsClasses/detailsTV";

export const defaultValueDetailsMovie = new DetailsMovie('', 0, 0, '', [], '', 0, [], '', 0, '', 0, '', [{ id: 0, name: '' }], '');
export const defaultValueCastMovie = new Cast(0, '', '', '', '');
export const defaultValueDetailsTV = new DetailTV('', [], '', '', [], [], { air_date: '', episode_number: 0, id: 0, name: '', ocerview: '', season_number: 0, still_path: '', vote_average: 0 }, '', [], 0, 0, '', '', '', '', [], [], 0);
