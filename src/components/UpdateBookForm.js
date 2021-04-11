// import React from 'react';
// import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import Checkbox from '@material-ui/core/Checkbox';
// // import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// // import Box from '@material-ui/core/Box';
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import {Link,useRouteMatch} from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import * as actions from '../actions/book';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function Form() {
//   const classes = useStyles();

//   const [title,setTitle] = React.useState('')
//   const [author,setAuthor] = React.useState('')
//   const [price,setPrice] = React.useState('')
//   const [category,setCategory] = React.useState('')
//   const [description,setDescription] = React.useState('')
//   const [isbn,setIsbn] = React.useState('')
//   const [publishedOn,setPublishedOn] = React.useState('')
//   const [lastUpdateOn,setLastUpdateOn] = React.useState('')
//   const dispatch = useDispatch()

//   const updateBook = () =>{

//     var book = {
//       title: title,
//       author: author,
//       category: category,
//       description: description,
//       isbn: isbn,
//       price: price,
//       publishedOn: publishedOn,
//       lastUpdetedOn: lastUpdateOn,
//     };
//     dispatch(actions.updateBook(book))
// }

// const handleChange = (e)=>{
//     let {name,value} = e.target

//     if(name==='title')
//     {
//       setTitle(value)
//       console.log('title = '+value)
//     }
//     else if(name==='author'){
//       setAuthor(value)
//       console.log('author =' +value)
//     }

//     else if(name==='price'){
//       setPrice(value)
//       console.log('price =' +value)
//     }

//     else if(name==='category'){
//       setCategory(value)
//       console.log('category =' +value)
//     }
//     else if(name==='description'){
//       setDescription(value)
//       console.log('description =' +value)
//     }
//     else if(name==='isbn'){
//       setIsbn(value)
//       console.log('isbn =' +value)
//     }

//     else if(name==='published'){
//       setPublishedOn(value)
//       console.log('published =' +value)
//     }
//     else if(name==='lastUpdate'){
//       setLastUpdateOn(value)
//       console.log('lastUpdate =' +value)
//     }

//   }
  

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
        
//         <Typography component="h1" variant="h5">
//         <PlaylistAddIcon /> Updating a book
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
            
//             <Grid item xs={12}>
//                 <TextField id ={match.params.id} disabled></TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="title"
//                 label="Title of book"
//                 type="text"
//                 name="title"
//                 onChange={handleChange}
//                 // autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="author"
//                 label="Author"
//                 type="text"
//                 id="author"
//                 onChange={handleChange}
//                 // autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="category"
//                 label="Category"
//                 type="text"
//                 name="category"
//                 onChange={handleChange}
//                 // autoComplete="email"
//               />
//             </Grid>
            
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 id="isbn"
//                 label="Isbn"
//                 type="text"
//                 name="isbn"
//                 onChange={handleChange}
//                 // autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 name="price"
//                 label="Price"
//                 type="text"
//                 id="price"
//                 onChange={handleChange}
//                 // autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 name="description"
//                 label="Description"
//                 type="text"
//                 id="description"
//                 onChange={handleChange}
//                 // autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 id="published"
//                 label="Published On"
//                 type="date"
//                 name="published"
//                 onChange={handleChange}
//                 // autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 name="lastUpdate"
//                 label="Last Update On"
//                 type="date"
//                 id="lastUpdate"
//                 onChange={handleChange}
//                 // autoComplete="current-password"
//               />
//             </Grid>
//           </Grid>
//           <Button onClick ={updateBook}
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Update
//           </Button>
//         </form>
//       </div>
//     </Container>
//   );
// }