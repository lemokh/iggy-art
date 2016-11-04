import React, { Component } from 'react';
import firebase from 'firebase';
import Dropzone from 'react-dropzone';
import './css/AddPostForm.css';

export default class AddPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      preview: "",
      title: "",
      description: ""
     };
     this.handleTitleChange = this.handleTitleChange.bind(this);
     this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  };
  onDrop(accepted, rejected){
    if(accepted[0] !== undefined){
      const file = accepted[0];
      document.getElementsByClassName('drop__zone__error')[0].style.display = "none";
      document.getElementsByClassName('drop__zone__preview')[0].style.display = "block";
      this.setState({
        preview: file.preview,
        file: file
       });
      document.getElementsByClassName('drop__zone__paragraph')[0].style.display = "none";
    }
    if(rejected[0] !== undefined){
      document.getElementsByClassName('drop__zone__error')[0].style.display = "block";
    }
  };
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  };
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  };
  handleSubmit(event){
    event.preventDefault();
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    const guid = () => {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    };
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const imagesRef = storageRef.child("images/" + guid());
    imagesRef.put(this.state.file).then((snapshot) => {
      firebase.database().ref('articles').push({
               title: this.state.title,
               description: this.state.description,
               src: snapshot.a.downloadURLs[0],
               points: 0
            }).then(()=>{
              document.getElementsByClassName("drop__zone__preview")[0].style.display = "none";
              document.getElementsByClassName("drop__zone__paragraph")[0].style.display = "block";
              this.setState({preview: "", title: "", description: "", file: {}});
            });
            document.getElementsByClassName("add__post__modal")[0].style.display = "none";
    });
  };
  render(){
    return (
      <div>
        <form className="add__post__form" onSubmit={this.handleSubmit}>
          <input className="add__post__title" type="text" placeholder="Post title..." value={this.state.title}  onChange={this.handleTitleChange}/><br/>
          <textarea className="add__post__description" placeholder="Tell us your story here..." value={this.state.description}  onChange={this.handleDescriptionChange}></textarea><br/>
          <div className="drop__zone__error"><p>Only jpg, gif, and png images are allowed</p></div>
          <Dropzone className="drop__zone" activeClassName="active__zone" onDrop={this.onDrop.bind(this)} multiple={false} minSize={30000} maxSize={4000000} accept={'image/*'}>
              <p className="drop__zone__paragraph">Drop image file here, or click to select image to upload.</p>
              <img className="drop__zone__preview" src={this.state.preview} alt="preview"/>
          </Dropzone>
          <button className="post__submit" type="submit">Publish <i className="fa fa-share"></i></button>
        </form>
      </div>
          );
  };
}
