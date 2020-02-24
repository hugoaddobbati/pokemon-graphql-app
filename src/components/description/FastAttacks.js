import React from 'react'
import {Typography, Chip} from '@material-ui/core'


const FastAttacks = (props) => {
    return ( 
        <Typography variant="h6" component="h5" className={props.classes.description}>
            Special Attacks: 
            <div className={props.classes.descriptionItem}>
            {props.pokeInfo.attacks.special.map((attack,key) => (
                <Chip label={attack.name} key={key} style={{marginTop: "2px",marginLeft: "10px", backgroundColor: "#f5b042"}}/>
            ))}
            </div> 
        </Typography>
     );
}
 
export default FastAttacks;