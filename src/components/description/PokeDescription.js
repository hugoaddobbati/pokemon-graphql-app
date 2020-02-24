import React from 'react'
import { useParams} from "react-router-dom";
import {useQuery} from '@apollo/react-hooks'
import {getPokemonQuery} from '../../queries/queries'
import {makeStyles} from '@material-ui/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Loader from 'react-loader-spinner'
import PokeDescriptionItems from './PokeDescriptionItems';

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
    
  });


const PokeDescription = (props) => {
    const classes = useStyles();
    let {name} = useParams();
    const { loading, error, data} = useQuery(
        getPokemonQuery,
        {
            variables:{
                name: name
            }
        }
    )
    const pokeInfo = data?.pokemon;
    let nameURL = ""
    if(data?.pokemon){
        if(data.pokemon.name === "Mr. Mime") nameURL = "mr-mime"
        else if(data.pokemon.name === "Farfetch'd") nameURL = 'farfetchd'
        else{
            nameURL = data.pokemon.name
        }
    }

    return (<div className={classes.container}>
        {error ? console.log(error) : <div></div>}
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
                    <PokeDescriptionItems name={name} pokeInfo={pokeInfo}/>
                </CardContent>
            </CardActionArea>
        </Card> 
        }
    </div>);
}
 
export default PokeDescription;