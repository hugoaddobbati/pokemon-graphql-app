import React from 'react'
import {Typography, Chip, Avatar} from '@material-ui/core'

const Evolutions = (props) => {
    return ( 
    <Typography variant="h6" component="h5" className={props.classes.description}>  
        Evolutions: 
        <div className={props.classes.descriptionItem}>
            {props.pokeInfo.evolutions 
            ?
            props.pokeInfo.evolutions.map(
                (evolution, key) => (
                    <Chip key={key} onClick={(event) => {props.handleClick(event, evolution.name)}}style={{marginTop: "2px", marginLeft: "10px"}} avatar={<Avatar alt={evolution.name} src={`https://img.pokemondb.net/artwork/${props.fixURLName(evolution.name)}.jpg`}/>} 
                    label={evolution.name}
            />))
            :
            <Chip label="None" style={{marginLeft: "10px"}}/>
            }
        </div> 
    </Typography> );
}
 
export default Evolutions;