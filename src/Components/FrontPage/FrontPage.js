import React, { Component } from 'react'
import "./FrontPage.css"
import axios from 'axios'
import Comparer from "../Comparer/Comparer"
import Contact from "../Contact/Contact"

class FrontPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             usr__1:"",
             usr__2:"",
             usr__1__imgSrc:"./Images/prof.jpg",
             usr__2__imgSrc:"./Images/prof.jpg",
             no_of_repos_1:0,
             no_of_followers_1:0,
             no_of_gists_1:0,
             no_of_repos_2:0,
             no_of_followers_2:0,
             no_of_gists_2:0,
             max_val_f:0,
             max_val_r:0
        }
    }
    handleUsr__1=(e)=>{
        this.setState({
            usr__1:e.target.value
        })
    }
    handleUsr__2=(e)=>{
        this.setState({
            usr__2:e.target.value
        })
    }
    handleChangeU1=()=>{

       // this.setState({[e.target.name]:e.target.value})
     //   console.log(`https://api.github.com/users/${this.state.usr__1}`)
            axios.get(`https://api.github.com/users/${this.state.usr__1}`)
            .then(response =>{
                this.setState({
                    usr__1__imgSrc:response.data.avatar_url,
                    no_of_repos_1:response.data.public_repos,
                    no_of_followers_1:response.data.followers,
                    no_of_gists_1:response.data.public_gists
                   })
                console.log(response)
            })
            .catch(error =>{
                console.log(error);
                this.setState({errorMsg:"Error retriveing data"})
            })
          
        // if(this.state.use__2!=''){
        //     axios.get(`https://api.github.com/users/${this.state.usr__2}`)
        //     .then(response =>{
        //         console.log(response)
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //         this.setState({errorMsg:"Error retriveing data"})
        //     })
       
        // }
        

    }
    handleClick=()=>{
    let k =  document.getElementById("front__page")
    k.style.display='none';
    let g =  document.getElementById("comp")
    g.style.display="block"
    // if(this.state.follower_1 > this.state.follower_2){
    //     this.setState({
    //         max_val:this.state.follower_1+100
    //     })
    // }
    // else{
    //     this.setState({
    //         max_val_f:this.state.follower_2+100
    //     })
    // }

    // if(this.state.repos_1 > this.state.repos_2){
    //     this.setState({
    //         max_val_r:this.state.repos_1+100
    //     })
    // }
    // else{
    //     this.setState({
    //         max_val_r:this.state.repos_2+100
    //     })
    // }
    // this.setState({
    //     img_1:this.state.usr__1__imgSrc,
    //     img_2:this.state.usr__2__imgSrc
    // })


    }
    handleChangeU2=()=>{

        // this.setState({[e.target.name]:e.target.value})
      //   console.log(`https://api.github.com/users/${this.state.usr__1}`)
    //  console.log("called")
             axios.get(`https://api.github.com/users/${this.state.usr__2}`)
             .then(response =>{
                 //console.log(response)
               this.setState({
                no_of_followers_2:response.data.followers,
                no_of_repos_2:response.data.public_repos,
                no_of_gists_2:response.data.public_gists,
                usr__2__imgSrc:response.data.avatar_url,
               })
               console.log(this.state.usr__2__imgSrc)
                 
             })
             .catch(error =>{
                 console.log(error);
                 this.setState({errorMsg:"Error retriveing data"})
             })
           
         // if(this.state.use__2!=''){
         //     axios.get(`https://api.github.com/users/${this.state.usr__2}`)
         //     .then(response =>{
         //         console.log(response)
         //     })
         //     .catch(error =>{
         //         console.log(error);
         //         this.setState({errorMsg:"Error retriveing data"})
         //     })
        
         // }
         
 
     }
    
    render() {
        const {usr__1, usr__2, usr__1__imgSrc,usr__2__imgSrc, no_of_repos_1 , no_of_followers_1, no_of_gists_1,no_of_repos_2 , no_of_followers_2, no_of_gists_2} = this.state

        return (
            <div>
            <div id="front__page">
            <div className="whole__pg">
            <h1 className="main__head">GitHub Profile Comparer</h1>
            <div className="main__hold">
            <div className="user__cred">
            <div className="input__1">
            <img src={usr__1__imgSrc} className="avatar__img" alt="you_avatar"></img>
            <h1 className="you">You</h1>
            <input type="text" name={usr__1} onChange={this.handleUsr__1}></input>
            <button className="nxt__btn" onClick={this.handleChangeU1} >&#8594;</button>
            </div>
            <div className="bound">
            </div>
            <div className="input__2">
            <img src={usr__2__imgSrc} className="avatar__img" alt="you_avatar"></img>
            <h1 className="friend">Friend</h1>
            <input type="text" value={usr__2} name={usr__2} onChange={this.handleUsr__2} ></input>
            <button className="nxt__btn" onClick={this.handleChangeU2}>&#8594;</button>
            </div>
            </div>
            <button className="next__btn" onClick={this.handleClick}>NEXT</button>
            </div>
            </div>
            
            {/* <Comparer /> */}
            </div>
            {/* no_of_followers:response.data.followers,
                no_of_repos:response.data.public_repos,
                no_of_gists:response.data.public_gists */}
                <Contact />
            <div id="comp"> 
                <Comparer repos_1={no_of_repos_1} follower_1={no_of_followers_1} gists_1={no_of_gists_1} repos_2={no_of_repos_2} follower_2={no_of_followers_2} gists_2={no_of_gists_2} usr_1={usr__1__imgSrc} usr_2={usr__2__imgSrc}   />
             </div> 
            </div>
        )
    }
}

export default FrontPage
