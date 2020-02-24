import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {useState} from 'react';
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
    const [clicked, setClicked] = useState(false);
    //since the navbar doesnt re-render, the <Redirect> tag would stay rendered and that would cause problems, so after 10ms we make it disappear
    const handleClick = (event) => {
      event.preventDefault();
      setClicked(true);
      setTimeout(() => {setClicked(false)}, 10)
    }
    const classes = useStyles();
    return(
        <AppBar position="static">    
            {clicked
            ? <Redirect to="/"/>
            : <div></div>
            }      
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="home" onClick={(event) => {handleClick(event)}}>
                    <HomeIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                PokeIO
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
