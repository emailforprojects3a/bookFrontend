import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/book';
import {Link} from 'react-router-dom';

class UpdateBook extends Component {
  constructor() {
    super();
    // this.bookId = React.createRef();
    this.title = React.createRef();
    this.author = React.createRef();
    this.category = React.createRef();
    this.description = React.createRef();
    this.isbn = React.createRef();
    this.price = React.createRef();
    this.publishedOn = React.createRef();
    this.lastUpdetedOn = React.createRef();
    this.state = { book : {},message: "" };
  }

  componentDidMount(){

    console.log(this.props.match.params.bookId)

  }

  updateBook() {
    console.log("updating...");

    var book = {
        bookId: this.props.match.params.bookId,
        title: this.title.current.value,
        author: this.author.current.value,
        category: this.category.current.value,
        description: this.description.current.value,
        isbn: this.isbn.current.value,
        price: this.price.current.value,
        publishedOn: this.publishedOn.current.value,
        lastUpdetedOn: this.lastUpdetedOn.current.value,
    };

    this.props.onUpdateBook(book)

  }

 
  render() {
    return (
      // <UpdateBookForm />
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              value = {this.props.match.params.bookId}
              disabled
              type="text"
              className="form-control"
              placeholder="Id"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.title}
              type="text"
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.author}
              type="text"
              className="form-control"
              placeholder="Author"
            />
          </div>
          {/* <div className="input-group mb-3">
            <input
              ref={this.category}
              type="text"
              className="form-control"
              placeholder="Category"
            />
          </div> */}
          <div className="input-group mb-3">
            <input
              ref={this.description}
              type="text"
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.isbn}
              type="text"
              className="form-control"
              placeholder="Isbn"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.price}
              type="text"
              className="form-control"
              placeholder="Price"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.publishedOn}
              type="date"
              className="form-control"
              placeholder="Published On"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.lastUpdetedOn}
              type="date"
              className="form-control"
              placeholder="Last Update On"
            />
          </div>
          <Link to="/">
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateBook.bind(this)}
          >
            Update
          </button>
          </Link>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  
  return {
   
    message : state.message,
    book : state.book
  }
}

const mapDispatchToState = (dispatch)=>{

  return {
    onUpdateBook : (payload) => dispatch(actions.EditBook(payload)),
    onFetchBook : (id) => dispatch(actions.fetchBook(id))
  }

}

export default connect(mapStateToProps,mapDispatchToState)(UpdateBook)