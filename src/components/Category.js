
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/category'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 350,
  },
  image: {
    width: 128,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function BookCard(props) {
  const classes = useStyles();

//   const [show, setShow] = React.useState(false)
const dispatch = useDispatch();

const deleteCategory = () =>{

  dispatch(actions.deleteCategory(props.category.categoryId))

}

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="cat1.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <p>{props.category.categoryId}</p>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        <h6>{props.category.categoryName}</h6>
                        </Typography>
                        
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
        <Grid item xs container direction="row" spacing={2} justify="center" alignItems="center">
                <IconButton onClick={deleteCategory}  >
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <Link to ={`/updateCat/${props.category.categoryId}` }> 
                <IconButton>
                    <EditIcon></EditIcon>
                </IconButton>
                </Link>

        </Grid>
      </Paper>
    </div>
  );
}
