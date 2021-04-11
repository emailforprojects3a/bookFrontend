import React, { Component } from "react";
import { connect } from "react-redux";
// import Book from "./Book.js";
import * as actions from '../actions/category'
import Category from './Category'
import Grid from '@material-ui/core/Grid';

class ViewCategory extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")


  }

  componentDidMount() {
    this.props.onFetchCategories()
  }

 

  render() {


    if(this.props.categories===undefined)
    {
      return (
        <h1></h1>
      )
    }

    // var categoryList = []

    // if(this.props.categories)
    // {

      var categoryList = this.props.categories.map((category, i) => {
        return (
         <Grid item xs={6} sm={5} lg={3}> 
         
         {/* <BookCard book ={book}></BookCard> */}
         <Category category = {category} > </Category>
         </Grid>
          
        );
      });

    //}
    

    return (
      <div>
          <Grid container spacing={3}>
          {categoryList}
          </Grid>
      
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    categories : state.categories
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchCategories : () => dispatch(actions.fetchCategories())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewCategory);