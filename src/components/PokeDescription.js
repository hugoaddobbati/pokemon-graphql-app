import React, {useEffect, useState} from 'react'
import { useParams} from "react-router-dom";
import {useQuery} from '@apollo/react-hooks'
import {getPokemonQuery} from '../queries/queries'
import { Typography, Paper} from '@material-ui/core'; 
import {makeStyles} from '@material-ui/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Loader from 'react-loader-spinner'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {Redirect} from 'react-router-dom'
import ColorTypes from '../utils/ColorTypes'

const useStyles = makeStyles({


    card: {
      maxWidth: 760,
      width: "100%",
      margin: "1%"
    },
    media: {
      height: "40%",
      minHeight: 400
    },
    container: {
        width: "100%", 
        display: "flex", 
        justifyContent: "center"
    },
    description: 
    {marginTop: "1%", display: "flex", flexDirection: "row", fontSize: "1.4em", marginTop: "10px"},
    descriptionItem:{
        display: "flex", flexDirection: "row", flexWrap: "wrap"
    }

  });




const PokeDescription = (props) => {
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
    
    let {name} = useParams();
    const { loading, error, data} = useQuery(
        getPokemonQuery,
        {
            variables:{
                name: name
            }
        }
    )

    console.log(data?.pokemon)
    const pokeInfo = data?.pokemon;
    let nameURL = ""
    if(data?.pokemon){
        if(data.pokemon.name == "Mr. Mime") nameURL = "mr-mime"
        else if(data.pokemon.name == "Farfetch'd") nameURL = 'farfetchd'
        else{
            nameURL = data.pokemon.name
        }
    }

    return (<div className={classes.container}>
        {loading 
            ?
            (<Loader type="TailSpin" color="#6200EE" height={80} width={80} style={{marginTop: "50px"}}/>)
            :
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={`https://img.pokemondb.net/artwork/${nameURL.toLowerCase()}.jpg`}
                title={name}
                />
                <CardContent style={{backgroundColor: "#EEEEEE"}}>
                <Typography variant="h4" component="h2">
                    {name[0].toUpperCase() + name.slice(1).toLowerCase()}
                </Typography>
                <Typography variant="h6" component="h5" className={classes.description}>
                   
                    Types: 
                    <div className={classes.descriptionItem}>
                    {pokeInfo.types.map(type => (
                     <Chip label={type} style={{marginTop: "2px", marginLeft: "10px", backgroundColor: ColorTypes[type]}}/>
                    ))}
                    </div> 
                </Typography>

                <Typography variant="h6" component="h5" className={classes.description}>     
                    Fast Attacks: 
                    <div className={classes.descriptionItem}>
                    {pokeInfo.attacks.fast.map(attack => (
                     <Chip label={attack.name} style={{marginTop: "2px", marginLeft: "10px", backgroundColor: "#fcf338"}}/>
                    ))}
                    </div> 
                </Typography>
                <Typography variant="h6" component="h5" className={classes.description}>
                    Special Attacks: 
                    <div className={classes.descriptionItem}>
                    {pokeInfo.attacks.special.map(attack => (
                        <Chip label={attack.name} style={{marginTop: "2px",marginLeft: "10px", backgroundColor: "#f5b042"}}/>
                    ))}
                    </div> 
                </Typography>
                <Typography variant="h6" component="h5" className={classes.description}>  
                    Evolutions: 
                    <div className={classes.descriptionItem}>
                    {pokeInfo.evolutions ?
                    pokeInfo.evolutions.map(
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
                </CardContent>
            </CardActionArea>
            {renderRedirect()}
        </Card> 
        }
    </div>);
}
 
export default PokeDescription;