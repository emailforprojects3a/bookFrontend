// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import {Link } from "react-router-dom";
// import * as actions from '../actions/book'
// // import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import EditIcon from '@material-ui/icons/Edit';



// class Book extends Component {


//   constructor() {
//     super();
//     this.state = { show : false};
//   }

//   handleClick(){
//     this.setState({show : !this.state.show})
//   }
  

//   deleteBook() {
//     console.log("deleting book "  +this.props.id)

//     this.props.onDeleteBook(this.props.id)
     
//   }
  
  
//     render(){
      
//         return (
//           <div className="card">
//               <img src='img_book.jpg' className="card-img-top book-img" alt="..."/>
//               <div className="card-body">
//                 <span className="badge rounded-pill bg-dark">{this.props.id}</span>
//                 <h5 className="card-title">{this.props.title}</h5>
//                 <p className="card-text">{this.props.author}</p>
//                 <p className="card-text">{this.props.price}</p>
//                 <div className={this.state.show?'':'hide'}>
//                   <p className="card-text">{this.props.category}</p>
//                   <p className="card-text">{this.props.isbn}</p>
//                   <p className="card-text">{this.props.publishedOn}</p>
//                 </div>
//                 {/* <i class="fab fa-facebook-f"></i> */}
//                 <IconButton  onClick={this.handleClick.bind(this)} >
//                     <VisibilityIcon fontSize="small" color="blue" />
//                 </IconButton>
//                 {/* <i class="fas fa-info"></i> */}
//                 <IconButton  onClick={this.deleteBook.bind(this)} aria-label="delete" >
//                     <DeleteIcon fontSize="small" />
//                 </IconButton>
//                 {/* <button  onClick={this.deleteBook.bind(this)}><DeleteOutlineIcon fontSize="small" ></DeleteOutlineIcon></button> */}
//                 <Link to ={`/update/${this.props.id}` }> 
//                 <IconButton >
//                   <EditIcon fontSize="small" />
//                 </IconButton>
//                 </Link>
                
//                 {/* <Link to={"/update/"+this.props.id}><button  className="btn btn-primary">Edit</button></Link>
//                 <button onClick={this.handleClick.bind(this)} className="btn btn-primary">More</button> */}
//               </div>
//             </div>
//       );
//     }
//   }

// const mapStateToProps = (state) =>{
//   return{
//     books : state.books
//   }
// }

// const mapDispatchToState = (dispatch)=>{
//   return{
//     onDeleteBook : (id) => dispatch(actions.deleteBook(id))
//   }
// }

// export default connect(mapStateToProps,mapDispatchToState)(Book)

