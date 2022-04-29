import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import TrailerMovie from "Root/class/trailerClasses/trailerMovie";
import { ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { requestImagesMovie, requestImageTV, requestTrailerTV } from "Root/utils/requestFunction";
import { requestTrailerMovie } from "Root/utils/requestFunction";
import Trailer from "../../trailers/Trailer";
import TrailerPreview from "../../trailers/TrailersPreview";
import Radium from 'radium';
import TrailerTV from "Root/class/trailerClasses/trailerTV";
import { ITrailerTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";

type Props = {
    id: number,
    nameMovie: string,
    nameTrailerList: string
}

const Media = (props: Props) => {
    const styles: Radium.StyleRules = {
        media: {
            maxWidth: '1350px',
            width: '100%',
            margin: '20px auto 0 auto'
        },
        menu: {
            display: 'flex',
            alignItems: 'center'
        },
        list: {
            margin: '0',
            marginBottom: '5px',
            display: 'flex',
            justifyContent: 'space-around',
            width: '400px',
            height: 'fit-content'
        },
        item: {
            height: 'fit-content',
            fontSize: '16px',
            fontFamily: 'Source Sans Pro, Arial, sans-serif',
            fontWeight: '700',
            listStyleType: 'none',
            cursor: 'pointer',
            borderBottom: '4px solid transparent',
            paddingBottom: '5px',
        },
        active: {
            height: 'fit-content',
            fontSize: '16px',
            fontFamily: 'Source Sans Pro, Arial, sans-serif',
            fontWeight: '700',
            listStyleType: 'none',
            cursor: 'pointer',
            borderBottom: '4px solid #222',
            paddingBottom: '5px',
        },
        count: {
            marginLeft: '5px',
            color: '#868686'
        },
        list_media: {
            display: 'flex',
            maxWidth: '950px',
            height: '260px',
            overflow: 'auto',
            paddingBottom: '20px'
        },
        list_media_item: {
            marginRight: '10px'
        }
    }
    const [poster, setPoster] = useState<string[]>([]);
    const [backdrop, setBackdrop] = useState<string[]>([]);
    const [trailerList, setTrailerList] = useState<ITrailerMovie[]>([]);
    const [activeList, setActiveList] = useState<string>('Posters');
    const location = useLocation();

    useEffect(() => {
        const requestImage = props.nameTrailerList === 'theater' ? requestImagesMovie : requestImageTV;
        requestImage(parseInt(location.pathname.replace(/[^\d]/g, ''))).then(res => {
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
    }, [props.nameTrailerList]);

    useEffect(() => {
        const requestTrailers = props.nameTrailerList === 'theater' ? requestTrailerMovie : requestTrailerTV;
        const trailer = props.nameTrailerList === 'theater' ? TrailerMovie : TrailerTV;
        poster.length > 0 && props.nameMovie
            && requestTrailers(parseInt(location.pathname.replace(/[^\d]/g, '')))
                .then((res: any) => {
                    const result = res.data.results.map((el: ITrailerMovie | ITrailerTV, index: number) => {
                        return new trailer(
                            el.name,
                            el.key,
                            el.published_at,
                            el.id,
                            props.nameMovie,
                            poster[index]
                        )
                    });
                    setTrailerList(result);
                });
    }, [poster])

    const onChange = (name: string) => setActiveList(name);

    return (
        <div style={styles.media}>
            <div style={styles.menu}>
                <h2>Media</h2>
                <ol style={styles.list}>
                    <li
                        style={styles.item}
                        onClick={() => onChange('Video')}
                    >
                        Video
                        <span style={styles.count}>{trailerList.length}</span>
                    </li>
                    <li
                        style={activeList !== 'Backdrops' ? styles.item : styles.active}
                        onClick={() => onChange('Backdrops')}>
                        Backdrops
                        <span style={styles.count}>{backdrop.length}</span>
                    </li>
                    <li
                        style={activeList !== 'Posters' ? styles.item : styles.active}
                        onClick={() => onChange('Posters')}>
                        Posters
                        <span style={styles.count}>{poster.length}</span>
                    </li>
                </ol>
            </div>
            <div>
                {activeList === 'Posters' && <div style={styles.list_media}>
                    {poster.slice(0, 10).map((el, index) =>
                        <img key={index} style={styles.list_media_item} src={el} />)}
                </div>}
                {activeList === 'Backdrops' && <div style={styles.list_media}>
                    {backdrop.slice(0, 10).map((el, index) =>
                        <img key={index} style={styles.list_media_item} src={el} />)}
                </div>}
                {activeList === 'Video'
                    && <div style={styles.list_media}>{trailerList.map((el, index) =>
                        <TrailerPreview
                            key={index}
                            trailer={el}
                            activeTrailerList={props.nameTrailerList} />)}
                    </div>}
                {<Trailer activeTrailerList={props.nameTrailerList} />}
            </div>
        </div>
    )
};

export default Media;