import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';
import classNames from 'classnames';
import './css/Image.css';

export default class Image extends Component {
  constructor(){
    super();
    this.state = { voted: false }
  };
  votingUp(pid, total, uid){
    const pRef = pid + "/points";
    const newVal = total + 1;
    firebase.database().ref('articles').update({ [pRef]: newVal });
    firebase.database().ref('votes/' + uid).push({ [pid]: "like" });
  };
  votingDown(pid, total, uid){
    const pRef = pid + "/points";
    const newVal = total - 1;
    firebase.database().ref('articles').update({ [pRef]: newVal });
    firebase.database().ref('votes/' + uid).push({ [pid]: "dislike" });
  };
  handleUpVote(pid, total){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        firebase.database().ref("votes/"+ user.uid).once('value', (snap) => {
          if(snap.val() === null){
            this.votingUp(pid, total, user.uid);
          }
          else {
            const pointIds = Object.values(snap.val());
            for (let i = 0, len = pointIds.length; i < len; i++) {
              if(pointIds[i].hasOwnProperty(pid)){
                this.setState({ voted: true });
              }
            }
            if(!this.state.voted){
              this.votingUp(pid, total, user.uid);
            } else {
              this.setState({ voted: false });
            }
          }
        });

      }
      else {
        document.getElementsByClassName("login__modal")[0].style.display = "block";
      }
    })
  };
  handleDownVote(pid, total){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        firebase.database().ref("votes/" + user.uid).once('value', (snap) => {
          if(snap.val() === null){
            this.votingDown(pid, total, user.uid);
          }
          else {
            const pointIds = Object.values(snap.val());
            for (let i = 0, len = pointIds.length; i < len; i++) {
              if(pointIds[i].hasOwnProperty(pid)){
                this.setState({ voted: true });
              }
            }
            if(!this.state.voted){
              this.votingDown(pid, total, user.uid);
            } else {
              this.setState({ voted: false });
            }
          }
        });

      }
      else {
        document.getElementsByClassName("login__modal")[0].style.display = "block";
      }
    })
  };
  render() {
    const btnLike = classNames({
      'fa fa-arrow-circle-up fa-lg': true,
      '--liked': this.props.tl === "l"
    });
    const btnDislike = classNames({
      'fa fa-arrow-circle-down fa-lg': true,
      '--disliked': this.props.tl === "d"
    });
    return (<li>
              <figure>
                <div className="article__points">
                  <p>points: <span>{this.props.points}</span></p>
                  <i id={`l${this.props.pid}`} className={btnLike}
                  onClick={this.handleUpVote.bind(this, this.props.pid, this.props.points)}></i>
                  <i id={`d${this.props.pid}`} className={btnDislike}
                  onClick={this.handleDownVote.bind(this, this.props.pid, this.props.points)}></i>
                </div>
                <Link to={`/post/${this.props.id}`}>
                  <img className="article__pic" src={this.props.src} alt='width:500px' />
                  <figcaption>
                    <p className="article__title">{this.props.title}</p>
                  </figcaption>
                </Link>
              </figure>
            </li>);
  };
}

Image.propTypes = {
  src: React.PropTypes.string,
  title: React.PropTypes.string,
  id: React.PropTypes.number,
  points: React.PropTypes.number
};
