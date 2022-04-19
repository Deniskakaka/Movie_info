import React from "react";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import { IDetailMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { IDetailTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import ListCreators from "./ListCreators";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

type Props = {
    cast: ICast[],
    details: IDetailMovie,
    poster: string
}

const DetailsHead = (props: Props) => {
    const writers = props.cast.filter((el: ICast) => el.known_for_department === 'Writing');
    const productions = props.cast.filter((el: ICast) => el.known_for_department === 'Production');
    const directions = props.cast.filter((el: ICast) => el.known_for_department === 'Directing');

    return <div className="details_header_wrapper"
        style={{ backgroundImage: `url(${props.details.getBackdrop_path()})` }}>
        <div className="bacground_blure"></div>
        <div className="wrapper">
            <Card className="details_header_wrapper__poster">
                <CardMedia
                    component="img"
                    height="100%"
                    image={`${props.poster}`}
                    alt="poster"
                />
            </Card>
            <div className="main_info">
                <h1 className="details_title">{props.details.title}</h1>
                <div className="main_info__details">
                    <span>{props.details.getRelease_date()}</span>
                    <span className="language">({props.details.original_language})</span>
                    <div className="main_info__details__actions">
                        {props.details.genres.map((el, index) => <span key={index}>{el.name}</span>)}
                    </div>
                    <span>{props.details.getRunTime()}</span>
                </div>
                <div className="main_info__other_details">
                    <h3 className="main_info__other_details__title">Overview</h3>
                    <p className="main_info__other_details__overview">{props.details.overview}</p>
                    <h2>Cast Creaters</h2>
                    <div className="main_info__other_details__cast">
                        <ListCreators class="directions" arrayItem={directions} />
                        <ListCreators class="writers" arrayItem={writers} />
                        <ListCreators class="productions" arrayItem={productions} />
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default DetailsHead;