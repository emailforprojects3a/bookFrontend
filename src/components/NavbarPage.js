import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import {Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
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

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    height: 100,
    width: 300,
    display: 'flex',
    alignItems: 'center',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [state, setState] = React.useState({
  //   category: '',
  //   name: 'hai',
  // });

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [show, setShow] = React.useState(true)
  // const handleChange =() =>{
  //   // <Link to= {"/signUp"} ></Link>
  // };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <strong>Book Store Management</strong>
          </Typography>
          <IconButton color='inherit'>
            <NotificationsActiveIcon />
          </IconButton >
          <Link to={'/signUp'}>
            <IconButton color='inherit' onClick ={() => setShow(!show)}>
            
              <AccountCircleIcon />
            
            </IconButton>
            </Link>
          
    
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
       
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          
          
           <ListItem button >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Home'/>
            </ListItem>
            <ListItem button >
              <ListItemIcon><AccountBoxIcon /></ListItemIcon>
              <ListItemText primary='Customer Module'/>
            </ListItem>
            <ListItem button >
              <ListItemIcon><RateReviewIcon /></ListItemIcon>
              <ListItemText primary='Review Module'/>
            </ListItem>
            <ListItem button >
              <ListItemIcon><ArtTrackIcon /></ListItemIcon>
              <ListItemText primary='Order Module'/>
            </ListItem>
            <ListItem>
              <ListItemIcon><SearchIcon /> </ListItemIcon>
              <TextField id="standard-basic" label="Search Book" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {['Inbox', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
     
    </div>
  );
}



