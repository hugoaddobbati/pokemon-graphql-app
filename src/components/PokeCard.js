import React from 'react'
import {makeStyles} from '@material-ui/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      width: "30%",
      margin: "1%"
    },
    media: {
      height: "20vh",
    },
  });

const PokeCard = (props) => {
    const [dimensions, setDimensions] = useState({width: 0, height: 0})
    const [clicked, setClicked] = useState(false);
    const classes = useStyles();

    const updateWindowDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }

    let {name, nameURL} = props;
    if(nameURL === "Mr. Mime"){
        nameURL = "mr-mime"
    }
    if(nameURL === "Farfetch'd"){
        nameURL = "farfetchd"
    }

    const handleClick = (event) => {
        event.preventDefault();
        setClicked(true);
    }

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions)
    }, []);

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', updateWindowDimensions)
        };
      }, []);

    return (     
    <Card className={classes.card} onClick={(event) => {handleClick(event)}}>
        {clicked
        ? <Redirect to={`/pokemon/${name.toLowerCase()}`}/>
        : <div></div>
        }
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={`https://img.pokemondb.net/artwork/${nameURL.toLowerCase()}.jpg`}
            title={name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={
                (dimensions.width > 540) 
                ?
                {}
                :
                {fontSize: "4vw"}
                }>
                {name}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card> );
}
 
export default PokeCard;