import React, { useEffect, useState } from "react";
import Sort from "./content/Sort";
import Radium from 'radium';
import Filters from "./content/Filters";
import List from "./content/List";
import { useDispatch, useSelector } from "react-redux";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { disableLoaderContent } from "Root/redux/rootRedux/action";
import { useLocation } from "react-router";
import FilterList from "Root/class/filter/filterClass";
import IFilterObject from "Root/interfaces/interfaceGlobalObject/IfiltersObject";

const Content = () => {
    const styles: Radium.StyleRules = {
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: '1450px',
            margin: '0 auto',
            padding: '20px 20px'
        },
        wrapper_filters: {
            width: '100%',
            maxWidth: '260px'
        },
        title: {
            margin: '0 20px 20px 0'
        },
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
        },
    };
    //TODO add danamic change title
    const [title, setTitle] = useState<string>('');
    const [filter, setFilter] = useState<IFilterObject>(new FilterList('', [], [], '', [0, 0], [0, 0]));
    const [sort, setSort] = useState<string>('');
    const [filtration, setFiltration] = useState<boolean>(false);
    const loader = useSelector((state: IglobalReduser) => state.rootReduser.contentLoader);
    const dispatch = useDispatch();
    const location = useLocation().pathname;

    useEffect(() => {
        setTimeout(() => dispatch(disableLoaderContent()), 1300);
        setTitle(`${location.match(/\/\w+/g)[1].replace('/', '').replace('_', ' ')}`);
    });

    useEffect(() => {
        setFilter(new FilterList('', [], [], '', [0, 0], [0, 0]));
    }, [location]);

    return (
        <div style={styles.wrapper}>
            <div style={styles.wrapper_filters}>
                <h1 style={styles.title}>{title}</h1>
                <Sort filter={filter} func={setSort}/>
                <Filters filter={filter} func={setFiltration}/>
                <button onClick={() => {
                    setFiltration(true);
                    setTimeout(() => setFiltration(false), 1300);
                }} >Filtration</button>
            </div>

            {
                loader
                    ? <Box style={styles.loader}><CircularProgress /></Box>
                    : <List filter={filter} filtration={filtration} sort={sort}/>
            }
        </div>
    )
};

export default Content;