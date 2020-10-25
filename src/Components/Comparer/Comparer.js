import React, { Component } from 'react';
import './Comparer.css';

class Comparer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img_1: './Images/prof.jpg',
      img_2: './Images/prof.jpg',
    };
    // this.setState({
    //             img_1:this.props.usr_1,
    //              img_2:this.props.usr_2
    //          })
  }
  // componentWillUpdate(){
  //     this.setState({
  //         img_1:this.props.usr_1,
  //         img_2:this.props.usr_2
  //     })
  // }
//    componentDidUpdate(){
//        this.setState({
//    max_val_f : Math.max(this.props.followers_1,this.props.followers_2) + 20,
//     max_val_fo : Math.max(this.props.forks_1,this.props.forks_2) + 20,
//     max_val_r  : Math.max(this.props.repos_1,this.props.repos_2)+ 30,
//     max_val_st : Math.max(this.props.count_1,this.props.count_2)+20,
//     max_val_wa  :Math.max(this.props.watchers_1,this.props.watchers_2) + 20
//        })
//    }
  render() {
    const {
      repos_1,
      follower_1,
      repos_2,
      follower_2,
      usr_1,
      usr_2,
      star_1,
      star_2,
      forks_1,
      forks_2,
      watchers_1,
      watchers_2,
      max_val_f,
      max_val_r,
      max_val_fo,
      max_val_wa,
      max_val_st,
    } = this.props;
    // const {img_1,img_2} = this.state
    return (
      <div>
        <div className="Comp__pg">
          <h1 className="res">Comparison</h1>
          <div className="Comp__holder">
            <div className="usr__1">
            {/* <h1> {max_val_f},
      {max_val_r},
      {max_val_fo},
      {max_val_wa},
      {max_val_st},</h1> */}
              <img src={usr_1} alt="usr_1_avatar"></img>
              <h1>Repos</h1>
              <h1>{repos_1}</h1>
              <meter value={repos_1} min="0" max={max_val_r}></meter>
              <h1>Stars</h1>
              <h1>{star_1}</h1>
              <meter value={star_1} min="0" max={max_val_st}></meter>
              <h1>Followers</h1>
              <h1>{follower_1}</h1>
              <meter value={follower_1} min="0" max={max_val_f}></meter>
              <h1>Forks</h1>
              <h1>{forks_1}</h1>
              <meter value={forks_1} min="0" max={max_val_fo}></meter>
              <h1>Watchers</h1>
              <h1>{watchers_1}</h1>
              <meter value={watchers_1} min="0" max={max_val_wa}></meter>
              {/* <h1>Contribution</h1>
            <meter value="2" min="0" max="10">2 out of 10</meter> */}
            </div>
            <div className="usr__2">
              <img src={usr_2} alt="usr_2_avatar"></img>
              <h1>Repos</h1>
              <h1>{repos_2}</h1>
              <meter value={repos_2} min="0" max={max_val_r}></meter>
              <h1>Stars</h1>
              <h1>{star_2}</h1>
              <meter value={star_2} min="0" max={max_val_st}></meter>
              <h1>Followers</h1>
              <h1>{follower_2}</h1>
              <meter value={follower_2} min="0" max={max_val_f}></meter>
              <h1>Forks</h1>
              <h1>{forks_2}</h1>
              <meter value={forks_2} min="0" max={max_val_fo}></meter>
              <h1>Watchers</h1>
              <h1>{watchers_2}</h1>
              <meter value={watchers_2} min="0" max={max_val_wa}></meter>
              {/* <h1>Contribution</h1>
            <meter  value="2" min="0" max="10">2 out of 10</meter> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comparer;
