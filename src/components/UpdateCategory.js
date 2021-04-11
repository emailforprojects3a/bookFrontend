import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/category';
import {Link} from 'react-router-dom';

class UpdateCategory extends Component {
  constructor() {
    super();
    this.categoryName = React.createRef();
    
    this.state = { category : {},message: "" };
  }

  componentDidMount(){

    console.log(this.props.match.params.categoryId)

  }

  updateCategory() {
    console.log("updating...");

    var category = {
        categoryId: this.props.match.params.categoryId,
        categoryName: this.categoryName.current.value,
        
    };

    this.props.onUpdateCategory(category)

  }

 
  render() {
    return (
      // <UpdateBookForm />
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              value = {this.props.match.params.categoryId}
              disabled
              type="text"
              className="form-control"
              placeholder="Id"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.categoryName}
              type="text"
              className="form-control"
              placeholder="Category Name"
            />
          </div>
          
          <Link to="/category">
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateCategory.bind(this)}
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
    category : state.category
  }
}

const mapDispatchToState = (dispatch)=>{

  return {
    onUpdateCategory : (payload) => dispatch(actions.EditCategory(payload))
    // onFetchBook : (id) => dispatch(actions.fetchBook(id))
  }

}

export default connect(mapStateToProps,mapDispatchToState)(UpdateCategory)