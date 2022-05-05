import React, { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IDetailMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { requestLinksMovie, requestLinksTV } from "Root/utils/requestFunction";
import Radium from 'radium';
import { IDetailTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import DetailsMovie from "Root/class/detailsClasses/detailsMovie";
import DetailTV from "Root/class/detailsClasses/detailsTV";

type Props = {
    details: IDetailMovie | IDetailTV,
}

const Acauntancy = (props: Props) => {
    const styles: Radium.StyleRules = {
        acauntancy: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginTop: '10px',
            maxHeight: '320px'
        },
        acauntancy__links: {
            display: 'flex',
            width: '150px',
            justifyContent: 'space-between'
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            fontSize: '16px',
            margin: '5px 0'
        },
        title: {
            fontWeight: '700',
            marginBottom: '5px'
        },
        data: {
            textTransform: 'uppercase'
        },
        logo_company: {
            maxWidth: '130px',
            width: '100%',
            height: '30px'
        }
    };
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');

    useEffect(() => {
        const request = props.details instanceof DetailsMovie ? requestLinksMovie : requestLinksTV
        if (props.details.id !== 0) {
            request(props.details.id).then(res => {
                setFacebook(res.data.facebook_id);
                setTwitter(res.data.twitter_id);
                setInstagram(res.data.instagram_id);
            });
        }
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
            {props.details instanceof DetailTV && <div style={styles.item}>
                <span style={styles.title}>Network</span>
                {
                    props.details.networks.map(el => <img
                        style={styles.logo_company}
                        src={`https://image.tmdb.org/t/p/original/${el.logo_path}`} />)
                }
            </div>}
        </div>
    )
};

export default Radium(Acauntancy);