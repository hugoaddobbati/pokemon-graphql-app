import React from 'react'
import {Typography, Chip} from '@material-ui/core'


const SpecialAttacks = (props) => {
    return ( 
        <Typography variant="h6" component="h5" className={props.classes.description}>     
            Fast Attacks: 
            <div className={props.classes.descriptionItem}>
            {props.pokeInfo.attacks.fast.map((attack,key) => (
                <Chip label={attack.name} key={key} style={{marginTop: "2px", marginLeft: "10px", backgroundColor: "#fcf338"}}/>
            ))}
            </div> 
        </Typography>
     );
}
 
export default SpecialAttacks;