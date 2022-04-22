import React, { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IDetailMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { requestLinksMovie } from "Root/utils/requestFunction";
import Radium from 'radium';

type Props = {
    details: IDetailMovie,
}

const Acauntancy = (props: Props) => {
    const styles:Radium.StyleRules = {
        acauntancy: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: '250px',
            marginTop: '10px'
        },
        acauntancy__links: {
            display: 'flex',
            width: '150p',
            justifyContent: 'space-between'
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            fontSize: '16px'
        },
        title: {
            fontWeight: '700',
            marginBottom: '5px'
        },
        data: {
            textTransform: 'uppercase'
        }
    };
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');

    useEffect(() => {
        props.details.id !== 0 && requestLinksMovie(props.details.id).then(res => {
            setFacebook(res.data.facebook_id);
            setTwitter(res.data.twitter_id);
            setInstagram(res.data.instagram_id);
        });
    }, [props.details]);

    return (
        <div style={styles.acauntancy}>
            <div style={styles.acauntancy__links}>
                <a href={`https://www.facebook.com/${facebook}`} target="_blank">
                    <FacebookIcon sx={{ fontSize: 40 }} />
                </a>
                <a href={`https://twitter.com/${twitter}`} target="_blank">
                    <TwitterIcon sx={{ fontSize: 40 }} />
                </a>
                <a href={`https://instagram.com/${instagram}`} target="_blank">
                    <InstagramIcon sx={{ fontSize: 40 }} />
                </a>
            </div>
            <div style={styles.item}>
                <span style={styles.title}>Status</span>
                <span style={styles.data}>{props.details.status}</span>
            </div>
            <div style={styles.item}>
                <span style={styles.title}>Original Language</span>
                <span style={styles.data}>{props.details.original_language}</span>
            </div>
            <div style={styles.item}>
                <span style={styles.title}>Budget</span>
                <span style={styles.data}>{props.details.getBudget('en-EN', 'USD')}</span>
            </div>
            <div style={styles.item}>
                <span style={styles.title}>Revenue</span>
                <span style={styles.data}>{props.details.getRevenue('en-EN', 'USD')}</span>
            </div>
        </div>
    )
};

export default Radium(Acauntancy) ;