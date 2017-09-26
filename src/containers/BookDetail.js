import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (
        <div className="card w-80"><span className="card-title">Select a book to get started!</span></div>
      )
    }
    return (
      <div className="card">

        <h4 className="card-title">{this.props.book.title}</h4>
        <div className="card-block">{this.props.book.pages} pages</div>
        <div className="card-block">Author: {this.props.book.author}</div>
        <div className="card-block">Price: ${this.props.book.price} USD</div>
        <div className="card-block">Published: {this.props.book.published_date} by {this.props.book.publisher}</div>
        <div className="card-block">Genre: {this.props.book.category.join(", ")} </div>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);
