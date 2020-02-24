import React, {useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Typography} from '@material-ui/core'
import {Evolutions, Types, FastAttacks, SpecialAttacks} from './DescriptionImports'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles({
    description: {
        display: "flex", flexDirection: "row", fontSize: "1.4em", marginTop: "10px"
    },
    descriptionItem:{
        display: "flex", flexDirection: "row", flexWrap: "wrap"
    }

});

const PokeDescriptionItems = (props) => {
    const classes = useStyles();
    const [redirectTo, setRedirect] = useState("")

    const fixURLName = (name) => {
        if(name === "Mr. Mime") return "mr-mime"
        else if(name === "Farfetch'd") return 'farfetchd'
        else{
            return name.toLowerCase()
        }
    }

    const renderRedirect = () => {
        if(redirectTo === "") return (<div></div>)
        else{
            return(<Redirect to={`/pokemon/${fixURLName(redirectTo)}`}/>)
        }
    }

    const handleClick = (event, name) => {
        event.preventDefault();
        setRedirect(name);
    }

    return (
        <div>  
            <Typography variant="h4" component="h2">
                {props.name[0].toUpperCase() + props.name.slice(1).toLowerCase()}
            </Typography>
            <Types pokeInfo={props.pokeInfo} classes={classes}/>
            <FastAttacks pokeInfo={props.pokeInfo} classes={classes}/>
            <SpecialAttacks pokeInfo={props.pokeInfo} classes={classes}/>
            <Evolutions fixURLName={fixURLName} handleClick={handleClick} pokeInfo={props.pokeInfo} classes={classes}/>
            {renderRedirect()}
        </div>
    );
}
 
export default PokeDescriptionItems;