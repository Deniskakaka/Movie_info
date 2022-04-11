import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import { actionSwitchKeyTrailer } from 'Root/redux/movieRedux/action';
import { actionSwitchKeyTrailerTV } from "Redux/tvRedux/action";
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import { ITrailerMovie } from 'Root/interfaces/interfaceClassMovie/interfaceMovie';
import { ITrailerTV } from 'Root/interfaces/interfaceClassMovie/interfaceTV';

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
        if (props.activeTrailerList === 'theater') {
            if (trailersMovie.length > 0 && keyMovie !== '') {
                return trailersMovie.filter((el: ITrailerMovie) => el.key === keyMovie)[0].nameMovie;
            }
        }
        if (props.activeTrailerList === 'TV') {
            if (trailerTV.length > 0 && keyTV !== '') {
                return trailerTV.filter((el: ITrailerTV) => el.key === keyTV)[0].nameMovie;
            }
        }
    }, [trailersMovie, keyMovie, keyTV, trailerTV, props])

    const returnKey = useMemo(() => {
        return keyMovie ? keyMovie : keyTV 
    }, [keyMovie, keyTV])

    const renderTrailerComponent = useMemo(() => keyTV || keyMovie && true, [keyTV, keyMovie]);

    const clearKeys = () => {
        dispatch(actionSwitchKeyTrailer(''));
        dispatch(actionSwitchKeyTrailerTV(''));
    }

    return (
        <div className="trailer" style={{ display: renderTrailerComponent && 'block' }}>
            <Button
                variant="outlined"
                color="error"
                className="trailer__close"
                onClick={() => clearKeys()}>
                <img src="https://img.icons8.com/fluency/344/cancel.png" />
            </Button>
            <h2 className="trailer__title">{renderTitleTrailer}</h2>
            <iframe
                className="action_trailer"
                src={`//www.youtube.com/embed/${returnKey}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1`}>
            </iframe>
        </div>
    )
}

export default Trailer;