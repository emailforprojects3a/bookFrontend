import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/category";
import CategoryForm from "./AddCategoryForm";

class AddCategory extends Component {
  constructor() {
    super();
    this.categoryName = React.createRef();
    this.state = { message: "" };
  }

  addCategory() {
    var category = {
      categoryName: this.categoryName.current.value,
    };


    this.props.onAddCategory(category)

    
  }

  render() {
    return (
      <CategoryForm/>
    );
  }
}

const mapStateToProps = (state) =>{

  return{
    message : state.message,
    categories : state.categories
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddCategory: (payload) => dispatch(actions.addCategory(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddCategory)