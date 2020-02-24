import React from 'react';
import {Typography, Chip} from '@material-ui/core'
import ColorTypes from '../../utils/ColorTypes'


const Types = (props) => {
    return (
    <Typography variant="h6" component="h5" className={props.classes.description}>         
        Types: 
        <div className={props.classes.descriptionItem}>
        {props.pokeInfo.types.map((type,key) => (
            <Chip label={type} key={key} style={{marginTop: "2px", marginLeft: "10px", backgroundColor: ColorTypes[type]}}/>
        ))}
        </div> 
    </Typography>
    );
}
 
export default Types;