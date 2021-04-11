import React, { Component } from "react";
import { connect } from "react-redux";
import Book from "./Book.js";
import * as actions from '../actions/book'

class ViewDetails extends Component {
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
        <Book
          key={book.bookId}
          id={book.bookId}
          title={book.title}
          author={book.author}
          category={book.category}
          description={book.description}
          isbn={book.isbn}
          price={book.price}
          publishedOn={book.publishedOn}
          lastUpdateOn={book.lastUpdateOn}
          fetchData={this.fetchData.bind(this)}
        ></Book>

      );
    });

    return (
      <div>
        <div>{bookList}</div>
        
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

export default connect(mapStateToProps,mapDispatchToState)(ViewDetails);