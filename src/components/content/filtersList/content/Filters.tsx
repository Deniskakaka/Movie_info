import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { requestCertificationsMovie, requestCertificationsListTV, requestGenresMovie, requestgenresTV, requestListLanguages } from "Root/utils/requestFunction";

import Slider from '@mui/material/Slider';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radium from 'radium';
import Chip from '@mui/material/Chip';
import { ILanguage } from "Root/interfaces/interfaceClassMovie/interfaceLanguage";
import { Language } from "Root/class/languageClass/language";
import IFilterObject from "Root/interfaces/interfaceGlobalObject/IfiltersObject";

type PropsGenres = {
    element: string,
    filter: IFilterObject,
    type: string,
    func: Dispatch<SetStateAction<boolean>>
}

const Teg = (props: PropsGenres) => {
    const styles: Radium.StyleRules = {
        item: {
            margin: '5px',
            fontSize: '0.9em',
            cursor: 'pointer'
        }
    };
    const [hover, setHover] = useState<boolean>(false);
    const [select, setSelect] = useState<boolean>(false);
    const location = useLocation().pathname;

    if (hover) {
        styles.item.background = '#01b4e4',
            styles.item.color = '#fff'
    }

    if (select) {
        styles.item.background = '#01b4e4',
            styles.item.color = '#fff'
    };

    useEffect(() => setSelect(false), [location]);

    return (
        <Chip
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={() => {
                setSelect(!select);
                props.func(false);
                if (props.type === 'genres') {
                    if (props.filter.genres.includes(props.element)) {
                        let position = props.filter.genres.indexOf(props.element);
                        props.filter.genres.splice(position, 1);
                    }
                    else props.filter.genres.push(props.element);
                }
                if (props.type === 'sertification') {
                    if (props.filter.sertification.includes(props.element)) {
                        let position = props.filter.sertification.indexOf(props.element);
                        props.filter.sertification.splice(position, 1);
                    }
                    else props.filter.sertification.push(props.element);
                }
            }}
            style={styles.item}
            label={`${props.element}`} />
    )
};

const votes = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' }
];

const run = [
    {
        value: 0,
        label: '0'
    },
    {
        value: 120,
        label: '120'
    },
    {
        value: 240,
        label: '240'
    },
    {
        value: 360,
        label: '360'
    }
];

type Props = {
    filter: IFilterObject,
    func: Dispatch<SetStateAction<boolean>>
}

const Filters = (props: Props) => {
    const styles: Radium.StyleRules = {
        wrapper: {
            width: '100%',
            maxWidth: '258px',
            margin: '30px 0'
        },
        content: {
            borderBottom: '1px solid #eeeeee',
        },
        title: {
            fontWeight: '600',
            fontSize: '20px'
        },
        wrapper_item: {
            borderBottom: '1px solid #eeeeee',
            padding: '5px 0',
            margin: '5px 0'
        },
        text: {
            marginLeft: '10px'
        },
        item: {
            marginTop: '10px'
        }
    };
    const location = useLocation();
    const [genres, setGenres] = useState<string[]>([]);
    const [sertification, setSertification] = useState<string[]>([]);
    const [languages, setLanguages] = useState<ILanguage[]>([]);
    const [lang, setLang] = useState<string>('');
    const [runtime, setRintime] = useState<number[]>([0, 0]);

    useEffect(() => {
        if (location.pathname.includes('movie')) {
            requestGenresMovie()
                .then(res => setGenres(res.data.genres.map((el: any) => el.name)));
            requestCertificationsMovie().then(res => setSertification(res.data.certifications['US'].map((el: any) => el.certification)));
        }
        else {
            requestgenresTV()
                .then(res => setGenres(res.data.genres.map((el: any) => el.name)));
            requestCertificationsListTV().then(res => setSertification(res.data.certifications['US'].map((el: any) => el.certification)));
        };
        requestListLanguages().then(res => {
            const result = res.data.map((el: any) => new Language(el.iso_639_1, el.english_name))
            .sort(function(a: any, b: any){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });
            setLanguages(result);
        });
    }, [location.pathname]);

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
        props.filter.language = event.target.value;
    };

    const handleChangeRuntime = (event: Event, newValue: number[]) => {
        setRintime(newValue as number[]);
        props.filter.runtime = newValue;
    };

    const valueText = (value: number) => {
        props.filter.vote = value;
        return `${value}`
    }

    const valueRuntime = (value: number) => `${value}`

    return (
        <Accordion style={styles.wrapper}>
            <AccordionSummary
                style={styles.content}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography style={styles.title}>Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div style={styles.wrapper_item}>
                    <Typography style={styles.text}>Genres</Typography>
                    <div>{genres.map(el => <Teg func={props.func} element={el} filter={props.filter} type='genres' />)}</div>
                </div>
                <div style={styles.wrapper_item}>
                    <Typography style={styles.text}>Certification</Typography>
                    <div>{sertification.map(el => <Teg func={props.func} element={el} filter={props.filter} type='sertification' />)}</div>
                </div>
                <FormControl fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lang}
                        label="Age"
                        onChange={handleChange}
                    >
                        {languages.map((el: ILanguage) => <MenuItem value={el.iso}>{el.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <div style={styles.item}>
                    <span>User Votes</span>
                    <Slider
                        aria-label="User Votes"
                        defaultValue={0}
                        getAriaValueText={valueText}
                        valueLabelDisplay="auto"
                        step={0.1}
                        min={0}
                        max={10}
                        marks={votes}
                    />
                </div>
                <div style={styles.item}>
                    <span>Runtime</span>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={runtime}
                        onChange={handleChangeRuntime}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueRuntime}
                        step={1}
                        min={0}
                        max={360}
                        marks={run}
                    />
                </div>
            </AccordionDetails>
        </Accordion>
    )
};

export default Filters;