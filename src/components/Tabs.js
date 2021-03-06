import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ViewBook from './ViewBook';
import AddBook from './AddBook';
import AddCategory from './AddCatergory'
import ViewCategory from './ViewCategory';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UpdateBook from './UpdateBook';
import UpdateCategory from './UpdateCategory'

function TabPanel(props) {

  const { children, value, index, ...other } = props;
    
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  rootPaper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 200,
    height: 38,
    position: 'absolute',
    right : 0,
    margin: '5px',
    [theme.breakpoints.down("sm")]: {
     display:'none',
    },

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    display : 'inline',
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SimpleTabs() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const books = useSelector((state) => state.reducer.book);
  // const [filteredBooks, setFilteredBooks] = React.useState(books);

  // const handleSearch = (e) =>{

  //   const {value} = e.target

  //   console.log(value)

  //   setFilteredBooks(books.filter(book=> book.title.toLowerCase().match(new RegExp(`^${value}`)) ||  book.author.toLowerCase().match(new RegExp(`^${value}`))))

  //   console.log(filteredBooks)


  // }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="View Book" />
          <Tab label="Add Book" />
          <Tab label="View Category" />
          <Tab label="Add Category" />
        </Tabs>
        
        <Paper component="form" className={classes.rootPaper}>
      <InputBase 
         //onChange={handleSearch}
        className={classes.input}
        placeholder="Search Book"
        // inputProps={{ 'aria-label': 'Search Book' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
        
        
      </AppBar>
      <TabPanel value={value} index={0}>
     

        <Switch>
         
        <Route path="/update/:bookId" component={UpdateBook}></Route>
          <Route  path="/">
           <ViewBook/>
          </Route>
          
        </Switch>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddBook />
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Switch>
         
          <Route path="/updateCat/:categoryId" component={UpdateCategory}></Route>
           <Route  path="/">
           <ViewCategory />
          </Route>
           
         </Switch>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddCategory />
      </TabPanel>
    
    </div>
  );
}

