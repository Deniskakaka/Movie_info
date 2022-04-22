import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITrailerTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";

import { actionBackgroundTrailer, actionSwitchKeyTrailer } from "Redux/movieRedux/action";
import { actionSwitchKeyTrailerTV, actionBackgroundTrailerTV } from "Redux/tvRedux/action";

type Props = {
    trailer: ITrailerMovie | ITrailerTV,
    activeTrailerList: string
}

const TrailerPreview = (props: Props) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    const mouseOver = () => {
        console.log(props.trailer.poster)
        setActive(true);
        props.activeTrailerList === 'theater'
            ? dispatch(actionBackgroundTrailer(props.trailer.poster))
            : dispatch(actionBackgroundTrailerTV(props.trailer.poster))
    }

    return <Card
        sx={{ maxWidth: 350, minWidth: 350 }}
        className="trailer_preview"
        onMouseOver={() => mouseOver()}
        onMouseOut={() => setActive(false)}
        onClick={() =>
            props.activeTrailerList === 'theater'
                ? dispatch(actionSwitchKeyTrailer(props.trailer.key))
                : dispatch(actionSwitchKeyTrailerTV(props.trailer.key))}>
        <CardMedia
            component="img"
            alt="poster movie"
            height="250"
            image={props.trailer.poster} />
        <PlayArrowIcon
            color={active ? "primary" : "action"}
            className="icon_play"
            sx={{ fontSize: 130 }} />
    </Card>
}

export default TrailerPreview;