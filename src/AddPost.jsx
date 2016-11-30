import React, { Component } from 'react';
import AddPostForm from './AddPostForm.jsx';
import './css/AddPost.css';

export default class AddPost extends Component {
  openAddPostModal=()=>{
    if(this.props.loggedIn){
      document.getElementsByClassName("add__post__modal")[0].style.display = "block";
    } else {
      document.getElementsByClassName("login__modal")[0].style.display = "block";
    }
  };
  closeAddPostModal(){
    document.getElementsByClassName("add__post__modal")[0].style.display = "none";
  };
  render() {
    return (
      <div>
        <div className="add__post" onClick={this.openAddPostModal}><i className="fa fa-cloud-upload"></i> Add Post</div>
        <div className="add__post__modal">
          <div className="add__post__modal__content">
            <span className="add__post__modal__close" onClick={this.closeAddPostModal}>x</span>
            <AddPostForm />
          </div>
        </div>
      </div>
    );
  };
}
