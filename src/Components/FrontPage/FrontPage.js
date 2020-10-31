import React, { Component } from 'react';
import './FrontPage.css';
import axios from 'axios';
import Comparer from '../Comparer/Comparer';
import Contact from '../Contact/Contact';
// import RetroHitCounter from 'react-retro-hit-counter';



class FrontPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usr__1: '',
      usr__2: '',
      usr__1__imgSrc: './Images/prof.jpg',
      usr__2__imgSrc: './Images/prof.jpg',
      no_of_repos_1: 0,
      no_of_followers_1: 0,
      no_of_gists_1: 0,
      no_of_repos_2: 0,
      no_of_followers_2: 0,
      no_of_gists_2: 0,
      repos_1: [],
      repos_2: [],
      rep: '',
      count_1: 0,
      count_2: 0,
      forks_1: 0,
      forks_2: 0,
      watchers_1: 0,
      watchers_2: 0,
      max_val_f: 0,
      max_val_r: 0,
      max_val_fo: 0,
      max_val_wa: 0,
      max_val_st: 0,
      w1: '',
      w2: '',
      w3: '',
      w4: '',
      w5: '',
      c_w1: 0,
      c_w2: 0,
      winner: '',
    };
  };
  handleUsr__1 = (e) => {
    this.setState({
      usr__1: e.target.value,
    });
  };
  handleUsr__2 = (e) => {
    this.setState({
      usr__2: e.target.value,
    });
  };
  handleChangeU1 = () => {
    axios
      .get(`https://api.github.com/users/${this.state.usr__1}`)
      .then((response) => {
        this.setState({
          usr__1__imgSrc: response.data.avatar_url,
          no_of_repos_1: response.data.public_repos,
          no_of_followers_1: response.data.followers,
          no_of_gists_1: response.data.public_gists,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert('please put a correct username');
        this.setState({ errorMsg: 'Error retriveing data' });
      });
    axios
      .get(`https://api.github.com/users/${this.state.usr__1}/repos`)
      .then((response) => {
        console.log(response);
        this.setState({
          repos_1: response.data,
        });
        this.state.repos_1.map((repo) => {
          this.setState(() => ({
            count_1: this.state.count_1 + repo.stargazers_count,
            forks_1: this.state.forks_1 + repo.forks_count,
            watchers_1: this.state.watchers_1 + repo.watchers_count,
          }));
          return console.log(repo.stargazers_count);
        });
      });
  };
  handleClick = () => {
    if (this.state.usr__1 === '' || this.state.usr__2 === '') {
      alert('please fill all fields');
    } else {
      let j = document.getElementById('counter')
      j.style.display = "none"
      let k = document.getElementById('front__page');
      k.style.display = 'none';
      let g = document.getElementById('comp');
      g.style.display = 'block';
      this.setState({
        max_val_f:
          Math.max(this.state.no_of_followers_1, this.state.no_of_followers_2) +
          20,
        max_val_fo: Math.max(this.state.forks_1, this.state.forks_2) + 20,
        max_val_r:
          Math.max(this.state.no_of_repos_1, this.state.no_of_repos_2) + 30,
        max_val_st: Math.max(this.state.count_1, this.state.count_2) + 20,
        max_val_wa: Math.max(this.state.watchers_1, this.state.watchers_2) + 20,
      });

      console.log(this.state.c_w1 + ' ' + this.state.c_w2);
      if (this.state.no_of_repos_1 > this.state.no_of_repos_2) {
        this.setState({
          w1: this.state.usr__1__imgSrc,
          c_w1: this.state.c_w1 + 1,
        });
      } else if (this.state.no_of_repos_1 < this.state.no_of_repos_2) {
        this.setState({
          w1: this.state.usr__2__imgSrc,
          c_w2: this.state.c_w2 + 1,
        });
      } else {
        this.setState({
          w1: './Images/prof.jpg',
        });
      }
      if (this.state.forks_1 > this.state.forks_2) {
        this.setState({
          w2: this.state.usr__1__imgSrc,
          c_w1: this.state.c_w1 + 1,
        });
      } else if (this.state.forks_1 < this.state.forks_2) {
        this.setState({
          w2: this.state.usr__2__imgSrc,
          c_w2: this.state.c_w2 + 1,
        });
      } else {
        this.setState({
          w2: './Images/prof.jpg',
        });
      }
      if (this.state.count_1 > this.state.count_2) {
        this.setState({
          w3: this.state.usr__1__imgSrc,
          c_w1: this.state.c_w1 + 1,
        });
      } else if (this.state.count_1 < this.state.count_2) {
        this.setState({
          w3: this.state.usr__2__imgSrc,
          c_w2: this.state.c_w2 + 1,
        });
      } else {
        this.setState({
          w3: './Images/prof.jpg',
        });
      }
      if (this.state.no_of_followers_1 > this.state.no_of_followers_2) {
        this.setState({
          w4: this.state.usr__1__imgSrc,
          c_w1: this.state.c_w1 + 1,
        });
      } else if (this.state.no_of_followers_1 < this.state.no_of_followers_2) {
        this.setState({
          w4: this.state.usr__2__imgSrc,
          c_w2: this.state.c_w2 + 1,
        });
      } else {
        this.setState({
          w4: './Images/prof.jpg',
        });
      }
      if (this.state.watchers_1 > this.state.watchers_2) {
        this.setState({
          w5: this.state.usr__1__imgSrc,
          c_w1: this.state.c_w1 + 1,
        });
      } else if (this.state.watchers_1 < this.state.watchers_2) {
        this.setState({
          w5: this.state.usr__2__imgSrc,
          c_w2: this.state.c_w2 + 1,
        });
      } else {
        this.setState({
          w5: './Images/prof.jpg',
        });
      }
      if (this.state.c_w1 > this.state.c_w2) {
        this.setState({
          winner: this.state.usr__1__imgSrc,
        });
      } else if (this.state.c_w1 < this.state.c_w2) {
        this.setState({
          winner: this.state.usr__1__imgSrc,
        });
      } else {
        this.setState({
          winner: './Images/prof.jpg',
        });
      }
    }
  };
  handleChangeU2 = () => {
    axios
      .get(`https://api.github.com/users/${this.state.usr__2}`)
      .then((response) => {
        this.setState({
          no_of_followers_2: response.data.followers,
          no_of_repos_2: response.data.public_repos,
          no_of_gists_2: response.data.public_gists,
          usr__2__imgSrc: response.data.avatar_url,
        });
        console.log(this.state.usr__2__imgSrc);
      })
      .catch((error) => {
        console.log(error);
        alert('please put a correct username');
        this.setState({ errorMsg: 'Error retriveing data' });
      });

    axios
      .get(`https://api.github.com/users/${this.state.usr__2}/repos`)
      .then((response) => {
        console.log(response);
        this.setState({
          repos_2: response.data,
        });
        this.state.repos_2.map((repo) => {
          this.setState(() => ({
            count_2: this.state.count_2 + repo.stargazers_count,
            watchers_2: this.state.watchers_2 + repo.watchers_count,
            forks_2: this.state.forks_2 + repo.forks_count,
          }));
          return console.log(repo.stargazers_count);
        });
      });
  };
  render() {
    const {
      usr__1,
      usr__2,
      count_1,
      count_2,
      usr__1__imgSrc,
      usr__2__imgSrc,
      no_of_repos_1,
      no_of_followers_1,
      no_of_gists_1,
      no_of_repos_2,
      no_of_followers_2,
      no_of_gists_2,
      forks_1,
      forks_2,
      watchers_1,
      watchers_2,
      max_val_f,
      max_val_r,
      max_val_fo,
      max_val_wa,
      max_val_st,
      w1,
      w2,
      w3,
      w4,
      w5,
      winner,
    } = this.state;
    // var values = {
    //   '2016-06-23': 1,
    //   '2016-06-26': 2,
    //   '2016-06-27': 3,
    //   '2016-06-28': 4,
    //   '2016-06-29': 4
    // }
    // var until = '2016-06-30';
  

    return (
      <div>
        <div id="front__page">
          <div className="whole__pg">
          {/* <Calendar values={values} until={until} /> */}
          {/* <Calendar  /> */}
          {/* GitHubCalendar(".calendar", "your-username"); */}
          {/* <div class="calendar">
    {/* <!-- Loading stuff -->
    Loading the data just for you. */}
         {/* </div>  */}
            <h1 className="main__head">GitHub Profile Comparer </h1>
            <div className="main__hold">
              <div className="user__cred">
                <div className="input__1">
                  <img
                    src={usr__1__imgSrc}
                    className="avatar__img"
                    alt="you_avatar"
                  ></img>
                  <h1 className="you">You</h1>
                  <input
                    type="text"
                    name={usr__1}
                    placeholder="username"
                    onChange={this.handleUsr__1}
                  ></input>
                  <button className="nxt__btn" onClick={this.handleChangeU1}>
                    &#8594;
                  </button>
                </div>
                <div className="bound"></div>
                <div className="input__2">
                  <img
                    src={usr__2__imgSrc}
                    className="avatar__img"
                    alt="you_avatar"
                  ></img>
                  <h1 className="friend">Friend</h1>
                  <input
                    type="text"
                    value={usr__2}
                    name={usr__2}
                    placeholder="username"
                    onChange={this.handleUsr__2}
                  ></input>
                  <button className="nxt__btn" onClick={this.handleChangeU2}>
                    &#8594;
                  </button>
                </div>
              </div>
              <button className="next__btn" onClick={this.handleClick}>
                NEXT
              </button>
            </div>
          </div>
        </div>
        <Contact />
        <div id="comp">
          <Comparer
            repos_1={no_of_repos_1}
            follower_1={no_of_followers_1}
            gists_1={no_of_gists_1}
            repos_2={no_of_repos_2}
            follower_2={no_of_followers_2}
            gists_2={no_of_gists_2}
            usr_1={usr__1__imgSrc}
            usr_2={usr__2__imgSrc}
            star_1={count_1}
            star_2={count_2}
            forks_1={forks_1}
            forks_2={forks_2}
            watchers_1={watchers_1}
            watchers_2={watchers_2}
            max_val_f={max_val_f}
            max_val_r={max_val_r}
            max_val_fo={max_val_fo}
            max_val_wa={max_val_wa}
            max_val_st={max_val_st}
            w1={w1}
            w2={w2}
            w3={w3}
            w4={w4}
            w5={w5}
            winner={winner}
          />
        </div>
        <div id="counter">
        <div className="powr-hit-counter" id="e0e75808_1604161769"></div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
