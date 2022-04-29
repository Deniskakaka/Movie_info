import React, { useMemo } from "react";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import { IDetailMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { IDetailTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import ListCreators from "./ListCreators";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Radium from 'radium';
import DetailsMovie from "Root/class/detailsClasses/detailsMovie";
import DetailTV from "Root/class/detailsClasses/detailsTV";

type Props = {
    cast: ICast[],
    details: IDetailMovie | IDetailTV,
    poster: string,
}

const DetailsHead = (props: Props) => {
    const styles: Radium.StyleRules = {
        content: {
            position: 'relative',
            display: 'flex',
            height: '730px',
            backgroundSize: 'cover',
            padding: '30px 0',
            backgroundImage: `url(${props.details.getBackdrop_path()})`
        },
        blure: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            backgroundColor: 'rgba(48, 45, 45, 0.7)',
            filter: 'blur(4px)',
            zIndex: '1'
        },
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '0 auto',
            maxWidth: '1350px'
        },
        poster: {
            position: 'relative',
            width: '350px',
            zIndex: '100'
        },
        info: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Source Sans Pro, Arial, sans-serif',
            marginLeft: '30px',
            zIndex: '100'
        },
        details_title: {
            color: '#fff',
            margin: '0 0 10px 0'
        },
        details: {
            display: 'flex',
            color: '#fff'
        },
        language: {
            textTransform: 'uppercase'
        },
        actions: {
            position: 'relative',
        },
        gender: {
            margin: '0 5px'
        },
        other_details: {
            color: '#fff',
            marginTop: '30px'
        },
        other_details__title: {

        },
        overview: {
            maxWidth: '850px'
        },
        cast: {
            display: 'flex',
            justifyContent: 'flex-start',
            maxWidth: 'fit-content',
            maxHeight: '350px',
            overflow: 'auto'
        }
}
const writers = props.cast.filter((el: ICast) => el.known_for_department === 'Writing');
const productions = props.cast.filter((el: ICast) => el.known_for_department === 'Production');
const directions = props.cast.filter((el: ICast) => el.known_for_department === 'Directing');

const renderTitle = useMemo(() => {
    if (props.details instanceof DetailsMovie) return props.details.title;
    if (props.details instanceof DetailTV) return props.details.original_name;
}, [props.details]);

return <div style={styles.content}>
    <div style={styles.blure}></div>
    <div style={styles.wrapper}>
        <Card style={styles.poster}>
            <CardMedia
                component="img"
                height="100%"
                image={`${props.poster}`}
                alt="poster"
            />
        </Card>
        <div style={styles.info}>
            <h1 style={styles.details_title}>{renderTitle}</h1>
            <div style={styles.details}>
                <span>{props.details.getRelease_date()}</span>
                <span style={styles.language}>({props.details.original_language})</span>
                <div style={styles.actions}>
                    {props.details.genres.map((el, index) => <span style={styles.gender} key={index}>{el.name}</span>)}
                </div>
                <span>{props.details.getRunTime()}</span>
            </div>
            <div style={styles.other_details}>
                <h3 style={styles.other_details__title}>Overview</h3>
                <p style={styles.overview}>{props.details.overview}</p>
                <h2>Cast Creaters</h2>
                <div style={styles.cast}>
                    <ListCreators arrayItem={directions} />
                    <ListCreators arrayItem={writers} />
                    <ListCreators arrayItem={productions} />
                </div>
            </div>
        </div>
    </div>
</div>
};

export default DetailsHead;