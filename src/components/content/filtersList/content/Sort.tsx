import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radium from 'radium';

const Sort = () => {
    const styles: Radium.StyleRules = {
        wrapper: {
            width: '100%',
            maxWidth: '258px'
        },
        content: {
            borderBottom: '1px solid #eeeeee',
        },
        box: {
            marginTop: '10px'
        },
        title: {
            fontWeight: '600',
            fontSize: '20px'
        }
    };
    const [sortBy, setSortBy] = useState<string>('Date Reliase');

    const handleChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value as string);
    }

    return (
        <Accordion style={styles.wrapper}>
            <AccordionSummary
                style={styles.content}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography style={styles.title}>Sort</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ minWidth: 120 }} style={styles.box}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortBy}
                            label="Sort By"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Date Reliase'}>Date Reliase</MenuItem>
                            <MenuItem value={'Rating'}>Rating</MenuItem>
                            <MenuItem value={'Title(A-Z)'}>Title(A-Z)</MenuItem>
                            <MenuItem value={'Title(Z-A)'}>Title(Z-A)</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
};

export default Sort;