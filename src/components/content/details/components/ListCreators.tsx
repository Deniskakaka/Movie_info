import React from "react";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import Radium from 'radium';

type Props = {
    arrayItem: ICast[]
}

const ListCreators = (props: Props) => {
    const styles: Radium.StyleRules = {
        creators: {
            width: 'fit-content',
            display: 'flex',
            flexWrap: 'wrap',
            height: 'fit-content'
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '33%',
            margin: '5px 2px',
            fontSize: '12px'
        }
    }
    return (
        <div style={styles.creators}>
            {
                props.arrayItem.map((el: ICast, index: number) =>
                    <div style={styles.item} key={index}>
                        <span>{el.name}</span>
                        <span>{el.known_for_department}</span>
                    </div>)
            }
        </div>
    )
};

export default ListCreators;