import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { graphql } from 'react-apollo';
import {getPokemonsQuery} from '../queries/queries'
import Loader from 'react-loader-spinner'
import PokeCard from './PokeCard'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: "100%",
    margin: "1%"
  },
  media: {
    height: "15%",
  },
  pokelist:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    width: 760
  },
  container: {
    width: "100%", 
    display: "flex", 
    justifyContent: "center"
  },
});

const PokeList = (props) =>{
    const classes = useStyles();
    return(
    <div className={classes.container}>
        <div className={classes.pokelist}>
            {props.data.loading 
            ?
            (<Loader type="TailSpin" color="#6200EE" height={80} width={80} style={{marginTop: "50px"}}/>)
            :
            props.data.pokemons.map((pokemon, key) => (<PokeCard key={key} nameURL={pokemon.name} name={pokemon.name}/>))
            }
        </div>
    </div>
    )
}

export default graphql(getPokemonsQuery)(PokeList);