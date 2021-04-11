import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/book";
import Form from "./AddBookForm";

class AddBook extends Component {
  constructor() {
    super();
    this.title = React.createRef();
    this.author = React.createRef();
    this.category = React.createRef();
    this.description = React.createRef();
    this.isbn = React.createRef();
    this.price = React.createRef();
    this.publishedOn = React.createRef();
    this.lastUpdetedOn = React.createRef();
    this.state = { message: "" };
  }

  addBook() {
    var book = {
      title: this.title.current.value,
      author: this.author.current.value,
      category: this.category.current.value,
      description: this.description.current.value,
      isbn: this.isbn.current.value,
      price: this.price.current.value,
      publishedOn: this.publishedOn.current.value,
      lastUpdetedOn: this.lastUpdetedOn.current.value,
    };


    this.props.onAddBook(book)

    
  }

  render() {
    return (
      <Form/>
      
    );
  }
}

const mapStateToProps = (state) =>{

  return{
    message : state.message,
    books : state.books
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddBook : (payload) => dispatch(actions.addBook(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddBook)