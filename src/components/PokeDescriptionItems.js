import React, {useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Typography, Chip, Avatar} from '@material-ui/core'
import ColorTypes from '../utils/ColorTypes'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles({
    description: {
        marginTop: "1%", display: "flex", flexDirection: "row", fontSize: "1.4em", marginTop: "10px"
    },
    descriptionItem:{
        display: "flex", flexDirection: "row", flexWrap: "wrap"
    }

});

const PokeDescriptionItems = (props) => {

    const classes = useStyles();
    const [redirectTo, setRedirect] = useState("")

    const fixURLName = (name) => {
        if(name == "Mr. Mime") return "mr-mime"
        else if(name == "Farfetch'd") return 'farfetchd'
        else{
            return name.toLowerCase()
        }
    }

    const renderRedirect = () => {
        if(redirectTo == "") return (<div></div>)
        else{
            return(<Redirect to={`/pokemon/${fixURLName(redirectTo)}`}/>)
        }
    }

    const handleClick = (event, name) => {
        event.preventDefault();
        console.log("name")
        setRedirect(name);
    }

    return (
        <div>  
            <Typography variant="h4" component="h2">
                {props.name[0].toUpperCase() + props.name.slice(1).toLowerCase()}
            </Typography>
            <Typography variant="h6" component="h5" className={classes.description}>
                
                Types: 
                <div className={classes.descriptionItem}>
                {props.pokeInfo.types.map(type => (
                    <Chip label={type} style={{marginTop: "2px", marginLeft: "10px", backgroundColor: ColorTypes[type]}}/>
                ))}
                </div> 
            </Typography>

            <Typography variant="h6" component="h5" className={classes.description}>     
                Fast Attacks: 
                <div className={classes.descriptionItem}>
                {props.pokeInfo.attacks.fast.map(attack => (
                    <Chip label={attack.name} style={{marginTop: "2px", marginLeft: "10px", backgroundColor: "#fcf338"}}/>
                ))}
                </div> 
            </Typography>
            <Typography variant="h6" component="h5" className={classes.description}>
                Special Attacks: 
                <div className={classes.descriptionItem}>
                {props.pokeInfo.attacks.special.map(attack => (
                    <Chip label={attack.name} style={{marginTop: "2px",marginLeft: "10px", backgroundColor: "#f5b042"}}/>
                ))}
                </div> 
            </Typography>
            <Typography variant="h6" component="h5" className={classes.description}>  
                Evolutions: 
                <div className={classes.descriptionItem}>
                {props.pokeInfo.evolutions ?
                props.pokeInfo.evolutions.map(
                    evolution => (
                <Chip onClick={(event) => {handleClick(event, evolution.name)}}style={{marginTop: "2px", marginLeft: "10px"}} avatar={<Avatar alt={evolution.name} src={`https://img.pokemondb.net/artwork/${fixURLName(evolution.name)}.jpg`}/>} 
                label={evolution.name}
                />
                )
                )
                :
                <Chip label="None" style={{marginLeft: "10px"}}/>
                }
                </div> 
            </Typography>
            {renderRedirect()}
        </div>
    );
}
 
export default PokeDescriptionItems;