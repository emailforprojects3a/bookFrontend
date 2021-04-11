import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/book'
import BookCard from "./BookCard.js";
import Grid from '@material-ui/core/Grid';

class ViewBook extends Component {
  constructor() {
    super();
    this.state = { books: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")


  }

  componentDidMount() {
    this.props.onFetchBooks()
  }

 

  render() {
    var bookList = this.props.books.map((book, i) => {
      return (
       <Grid item xs={6} sm={5} lg={3}> 
       
       <BookCard book ={book}></BookCard>
       
       </Grid>
        
      );
    });
  

    return (
      <div>
          <Grid container spacing={3}>
          {bookList}
          </Grid>
      
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    books : state.books
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchBooks : () => dispatch(actions.fetchBooks())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewBook);