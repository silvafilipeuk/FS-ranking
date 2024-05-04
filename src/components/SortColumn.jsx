import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import React from "react";

function SortColumn({field, fieldLabel, selectedSort, updateSort}) {
    return (
        <Grid container onClick={(event) => updateSort(event, field)}>
            <Grid item>
                <Typography>{fieldLabel}</Typography>
            </Grid>
            {selectedSort.field === field && (
                <Grid item>
                    {selectedSort.direction === 'asc' ? <SouthIcon/> : <NorthIcon/>}
                </Grid>
            )}
        </Grid>
    );
}

export default SortColumn;
