import React, { useState } from "react";
import { IRecommendationMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Radium from 'radium';
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { activeLoaderContent } from "Root/redux/rootRedux/action";
import { actionRequestDetails } from "Root/utils/componentsFunctions";
import { actionRequestDetailsMovie } from "Root/redux/movieRedux/action";
import { actionRequestDetailsTV } from "Root/redux/tvRedux/action";
import { Link } from "react-router-dom";

type PropsDate = {
    element: IRecommendationMovie,
    func: (id:number, poster: string) => void,
    pathname: string
}

const Element = (props: PropsDate) => {
    const styles: Radium.StyleRules = {
        item: {
            position: 'relative',
            marginRight: '10px',
            borderRadius: '10px',
            zIndex: '1'
        },
        describe: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            margin: '5px 0',
            padding: '0 5px',
        },
        date: {
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: '#fff',
            height: '40px',
            color: '#222',
            width: '100%',
            zIndex: '100',
            padding: '0 0 0 5px',
        }
    };
    const [show, setShow] = useState<boolean>(false);

    if (show) {
        styles.date.top = '141px'
    }

    return (
        <Link to={props.pathname.includes('movie_details') ? `/movie_details/${props.element.id}` : `/tv_details/${props.element.id}`}>
            <Card
                style={styles.item}
                sx={{ minWidth: 250 }}
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
                onClick={() => props.func(props.element.id, props.element.getBackdrop_path())}>
                <CardMedia
                    component="img"
                    alt="recommendate"
                    height="181"
                    image={`${props.element.getBackdrop_path()}`}
                />
                <div style={styles.describe}>
                    <span>{props.element.title}</span>
                    <span>{`${Math.round(props.element.getVote_average() * 10)}%`}</span>
                </div>
                <div style={styles.date}>
                    <CalendarMonthIcon />{props.element.getRelease_date()}
                </div>
            </Card>
        </Link>

    );
}

type Props = {
    list: IRecommendationMovie[]
}

const Recommendate = (props: Props) => {
    const styles: Radium.StyleRules = {
        wrapper: {
            display: 'flex',
            maxWidth: '1350px',
            overflow: 'auto',
            margin: '20px auto',
            padding: '10px 0',
        }
    };
    const location = useLocation().pathname;
    const dispatch = useDispatch();

    const renderDetails = (id:number, poster:string) => {
        dispatch(activeLoaderContent());
        localStorage.setItem('id', `${id}`);
        localStorage.setItem('poster', poster);
        if (location.toLocaleLowerCase().includes('movie_details')) {
            actionRequestDetails(dispatch, actionRequestDetailsMovie, id);
        }
        if (location.toLocaleLowerCase().includes('tv_details')) {
            actionRequestDetails(dispatch, actionRequestDetailsTV, id);
        }
    };

    return (
        <div style={styles.wrapper}>
            {
                props.list.map((el: IRecommendationMovie) => {
                    return <Element element={el} key={el.id} func={renderDetails} pathname={location}/>
                })
            }
        </div >
    );
};

export default Recommendate