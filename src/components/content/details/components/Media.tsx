import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import TrailerMovie from "Root/class/trailerClasses/trailerMovie";
import { ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { requestImagesMovie } from "Root/utils/requestFunction";
import { requestTrailerMovie } from "Root/utils/requestFunction";
import Trailer from "../../trailers/Trailer";
import TrailerPreview from "../../trailers/TrailersPreview";

type Props = {
    id: number,
    nameMovie: string
}

const Media = (props: Props) => {
    const [poster, setPoster] = useState<string[]>([]);
    const [backdrop, setBackdrop] = useState<string[]>([]);
    const [trailerList, setTrailerList] = useState<ITrailerMovie[]>([]);
    const [activeList, setActiveList] = useState<string>('Posters');
    const location = useLocation();

    useEffect(() => {
        requestImagesMovie(parseInt(location.pathname.replace(/[^\d]/g, ''))).then(res => {
            const imagePoster: string[] = [];
            const imageBackdrop: string[] = [];
            res.data.posters.map((el: any) => {
                imagePoster.push(`https://image.tmdb.org/t/p/original${el.file_path}`);
            });
            res.data.backdrops.map((el: any) => {
                imageBackdrop.push(`https://image.tmdb.org/t/p/original${el.file_path}`);
            });
            setPoster(imagePoster);
            setBackdrop(imageBackdrop);
        });
    }, []);

    const onChange = (name: string) => setActiveList(name);

    return (
        <div className="media">
            <div className="media__menu">
                <h2>Media</h2>
                <ol className="media__menu__list">
                    <li
                        className="media__menu__list__item"
                        onClick={() => onChange('Video')}
                    >
                        Video
                        <span>{trailerList.length}</span>
                    </li>
                    <li
                        className={`media__menu__list__item ${activeList === 'Backdrops' ? 'activeList' : ''}`}
                        onClick={() => onChange('Backdrops')}>
                        Backdrops
                        <span>{backdrop.length}</span>
                    </li>
                    <li
                        className={`media__menu__list__item ${activeList === 'Posters' ? 'activeList' : ''}`}
                        onClick={() => onChange('Posters')}>
                        Posters
                        <span>{poster.length}</span>
                    </li>
                </ol>
            </div>
            <div>
                {activeList === 'Posters' && <div className="media__poster">
                    {poster.map(el => <img className="media__poster__item" src={el} />)}
                </div>}
                {activeList === 'Backdrops' && <div className="media__backdrop">
                    {backdrop.map(el => <img className="media__backdrop__item" src={el} />)}
                </div>}
            </div>
        </div>
    )
};

export default Media;