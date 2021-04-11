import React from 'react';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/category'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const classes = useStyles();

  const [categoryName,setCategoryName] = React.useState('')
  const dispatch = useDispatch()
  const addCategory = () =>{

    var category = {
      categoryName: categoryName,
    };
    dispatch(actions.addCategory(category))
  }
  const handleChange = (e)=>{
    let {name,value} = e.target

    if(name==='categoryName')
    {
      setCategoryName(value)
      console.log('category = '+value)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
        <PlaylistAddIcon /> Adding a Category
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="categoryName"
                label="Name of the Category"
                type="text"
                name="categoryName"
                onChange={handleChange}
                // autoComplete="email"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={addCategory}
          >
            Add
          </Button>
        </form>
      </div>
    </Container>
  );
}