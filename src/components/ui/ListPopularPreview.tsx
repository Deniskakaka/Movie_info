import React, { useCallback, useMemo } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITV } from "Interfaces/interfaceClassMovie/interfaceTV";
import SmoothList from 'react-smooth-list';
import { useDispatch, useSelector } from "react-redux";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import { Link } from "react-router-dom";
import Radium from 'radium';

type Props = {
    popularMovie: IMovie[] | ITV[],
    action: any
};

const ListStartPopular = (props: Props) => {
    const styles: Radium.StyleRules = {
        wrapper: {
            display: 'flex',
            maxWidth: '100%',
            overflow: 'auto',
            padding: '20px 0',
        },
        popular: {
            position: 'relative',
            maxWidth: '150px',
            minWidth: '150px',
            minHeight: '370px',
            margin: '0 10px',
            transition: 'all 0.3s ease',
        },
        rating: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '5px',
            right: '5px',
            border: '4px solid #fff',
            color: '#fff',
            backgroundColor: '#222',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontFamily: 'Consensus',
            fontSize: '13px'
        },
        text: {
            fontSize: '8px',
            marginBottom: '7px'
        }
    }
    const activeList = useSelector((state: IglobalReduser) => state.rootReduser.activeListStartPage);
    const dispatch = useDispatch();

    const paintingRating = (rating: number) => {
        if (rating >= 7.5) return '#05f03c';
        if (rating < 7.5 && rating > 6) return '#dcf005';
        if (rating <= 6 && rating > 4) return '#f07e05';
        if (rating <= 4) return '#f00505';
    };

    const hashId = (id: number, poster: string) => {
        dispatch(props.action(id));
        localStorage.setItem('id', `${id}`);
        localStorage.setItem('poster', poster);
    };


    return (
        <SmoothList>
            <div style={styles.wrapper}>
                {
                    props.popularMovie.map(el => {
                        return <Link to={activeList === 'theater' ? `/movie_details/${el.id}` : '/tv_details'}>
                            <Card style={styles.popular} onClick={() => hashId(el.id, el.getPoster_path())}>
                                <CardMedia
                                    component="img"
                                    height="225"
                                    image={el.getPoster_path()} />
                                <CardContent className="content">
                                    <Typography>
                                        {el.original_title}
                                    </Typography>
                                    <Typography>
                                        {el.getRelease_date()}
                                    </Typography>
                                    <div style={styles.rating}>
                                        {`${el.getVote_average() * 10}`}
                                        <span style={styles.text}>%</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    })
                }
            </div>
        </SmoothList>
    )
}

export default ListStartPopular;