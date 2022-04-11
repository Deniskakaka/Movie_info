import React from "react";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITrailerTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";

import { actionBackgroundTrailer, actionSwitchKeyTrailer } from "Redux/movieRedux/action";
import { actionSwitchKeyTrailerTV } from "Redux/tvRedux/action";


type Props = {
    trailer: ITrailerMovie |ITrailerTV,
    activeTrailerList: string
}

const TrailerPreview = (props: Props) => {
    const dispatch = useDispatch();

    return <Card
        sx={{ maxWidth: 350, minWidth: 350 }}
        className="trailer_preview"
        onMouseOver={() => dispatch(actionBackgroundTrailer(props.trailer.poster))}
        onClick={() => 
        props.activeTrailerList === 'theater' 
        ? dispatch(actionSwitchKeyTrailer(props.trailer.key)) 
        : dispatch(actionSwitchKeyTrailerTV(props.trailer.key))}>
        <CardMedia
            component="img"
            alt="poster movie"
            height="250"
            image={props.trailer.poster} />
    </Card>
}

export default TrailerPreview;