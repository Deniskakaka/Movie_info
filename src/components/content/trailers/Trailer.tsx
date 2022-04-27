import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

import { actionSwitchKeyTrailer } from 'Root/redux/movieRedux/action';
import { actionSwitchKeyTrailerTV } from "Redux/tvRedux/action";
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import Radium from 'radium';

type Props = {
    activeTrailerList: string
}

const Trailer = (props: Props) => {
    const styles: Radium.StyleRules = {
        trailer: {
            position: 'fixed',
            backgroundColor: '#000',
            width: '100%',
            maxWidth: '1483px',
            height: '833px',
            padding: '80px 2px 0 2px',
            top: '42px',
            left: '10%',
            borderRadius: '5px',
            zIndex: '100'
        },
        title: {
            position: 'absolute',
            top: '-10px',
            left: '30px',
            color: '#fff'
        }, 
        action_trailer: {
            width: '100%',
            height: '100%',
            minWidth: '90px',
            minHeight: '50px',
            border: 'none'
        }
    }
    const keyMovie = useSelector((state: IglobalReduser) => state.movieReduser.trailerKey);
    const keyTV = useSelector((state: IglobalReduser) => state.tvReduser.trailerKey);
    const dispatch = useDispatch();

    const returnKey = useMemo(() => keyMovie ? keyMovie : keyTV, [keyMovie, keyTV])

    const renderTrailerComponent = useMemo(() => keyTV || keyMovie && true, [keyTV, keyMovie]);

    const clearKeys = () => {
        dispatch(actionSwitchKeyTrailer(''));
        dispatch(actionSwitchKeyTrailerTV(''));
    }

    return (
        renderTrailerComponent && <div style={styles.trailer}>
            <CloseIcon color="error" onClick={() => clearKeys()} sx={{ fontSize: 30 }} />
            <h2 style={styles.title}></h2>
            {returnKey && <iframe
                style={styles.action_trailer}
                src={`//www.youtube.com/embed/${returnKey}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1`}>
            </iframe>}
        </div>
    )
}

export default Trailer;