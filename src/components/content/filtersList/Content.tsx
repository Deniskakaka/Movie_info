import React from "react";
import Sort from "./content/Sort";
import Radium from 'radium';
import Filters from "./content/Filters";
import List from "./content/List";

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
        }
    };
    //TODO add danamic change title
    return (
        <div style={styles.wrapper}>
            <div style={styles.wrapper_filters}>
                <h1 style={styles.title}>Time Title</h1>
                <Sort />
                <Filters />
            </div>
            <List />
        </div>
    )
};

export default Content;