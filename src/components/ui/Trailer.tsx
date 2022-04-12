import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { actionSwitchKeyTrailer } from 'Root/redux/movieRedux/action';
import { actionSwitchKeyTrailerTV } from "Redux/tvRedux/action";
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import { returnNameTrailer } from "Root/utils/componentsFunctions";

type Props = {
    activeTrailerList: string
}

const Trailer = (props: Props) => {
    const keyMovie = useSelector((state: IglobalReduser) => state.movieReduser.trailerKey);
    const keyTV = useSelector((state: IglobalReduser) => state.tvReduser.trailerKey);
    const trailersMovie = useSelector((state: IglobalReduser) => state.movieReduser.trailerMovie);
    const trailerTV = useSelector((state: IglobalReduser) => state.tvReduser.trailerTV);
    const dispatch = useDispatch();

    const renderTitleTrailer = useMemo(() => {
        if (props.activeTrailerList === 'theater') return returnNameTrailer(trailersMovie, keyMovie);
        if (props.activeTrailerList === 'TV') return returnNameTrailer(trailerTV, keyTV);
    }, [trailersMovie, keyMovie, keyTV, trailerTV, props])

    const returnKey = useMemo(() => keyMovie ? keyMovie : keyTV, [keyMovie, keyTV])

    const renderTrailerComponent = useMemo(() => keyTV || keyMovie && true, [keyTV, keyMovie]);

    const clearKeys = () => {
        dispatch(actionSwitchKeyTrailer(''));
        dispatch(actionSwitchKeyTrailerTV(''));
    }

    return (
        <div className="trailer" style={{ display: renderTrailerComponent && 'block' }}>
            <CloseIcon color="error" onClick={() => clearKeys()} className="trailer__close" />
            <h2 className="trailer__title">{renderTitleTrailer}</h2>
            <iframe
                className="action_trailer"
                src={`//www.youtube.com/embed/${returnKey}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1`}>
            </iframe>
        </div>
    )
}

export default Trailer;