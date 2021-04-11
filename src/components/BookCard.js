
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/book'
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

  const [show, setShow] = React.useState(false)

  const handleClick = () =>{
    setShow(!show)
  }

  const dispatch = useDispatch()

  const deleteBook = () =>{

    dispatch(actions.deleteBook(props.book.bookId))

  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="bookk.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <p>{props.book.bookId}</p>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        <h5>{props.book.title}</h5>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <p>{props.book.author}</p>
                        </Typography>
                        <Typography variant="body2" gutterBottom >
                        <p>₹ {props.book.price}</p>
                        </Typography>
                        <div className={show?'':'hide'}>
                          
                          <Typography variant="body2" gutterBottom>
                              <p>Category {props.book.category.categoryName}</p>
                          </Typography>

                          <Typography variant="body2" gutterBottom>
                            <p>Isbn {props.book.isbn}</p>
                          </Typography>
                           
                          <Typography variant="body2" gutterBottom>
                            <p>{props.book.description}</p>
                          </Typography>

                          <Typography variant="body2" gutterBottom>
                            <p>{props.book.publishedDate}</p>
                          </Typography>
                  
                      </div>
                    </Grid>
      
                    
                    
                </Grid>
                
                
            </Grid>
        </Grid>
        <Grid item xs container direction="row" spacing={0} justify="center" alignItems="center">
                <IconButton  onClick={handleClick} >
                    <VisibilityIcon fontSize="small" color="blue" />
                </IconButton >
                {/* <i class="fas fa-info"></i> */}
                <IconButton onClick={deleteBook}  >
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <Link to ={`/update/${props.book.bookId}` }> 
                <IconButton>
                    <EditIcon></EditIcon>
                </IconButton>
                </Link>

        </Grid>
      </Paper>
    </div>
  );
}
