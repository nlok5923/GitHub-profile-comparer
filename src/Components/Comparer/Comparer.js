import React, { Component } from 'react'
import './Comparer.css'

class Comparer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            img_1:"./Images/prof.jpg",
            img_2:"./Images/prof.jpg"
        }
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
    
    render() {
        const {repos_1, follower_1,repos_2, follower_2,usr_1,usr_2,star_1,star_2} = this.props
        // const {img_1,img_2} = this.state
        return (
            
            <div>
            <div className="Comp__pg">
            <h1 className="res">Comparison</h1>
            <div className="Comp__holder">
            <div className="usr__1">
            <img src={usr_1} alt="usr_1_avatar"></img>
            <h1>Repos</h1>
            <meter value={repos_1} min="0" max="100"></meter>
            <h1>Stars</h1>
            <meter value={star_1} min="0" max="100"></meter>
            <h1>Followers</h1>
            <meter  value={follower_1} min="0" max="100"></meter>
            {/* <h1>Contribution</h1>
            <meter value="2" min="0" max="10">2 out of 10</meter> */}
            </div>
            <div className="usr__2">
            <img src={usr_2}  alt="usr_2_avatar" ></img>
            <h1>Repos</h1>
            <meter  value={repos_2} min="0" max="100"></meter>
            <h1>Stars</h1>
            <meter  value={star_2} min="0" max="100"></meter>
            <h1>Followers</h1>
            <meter  value={follower_2} min="0" max="100"></meter>
            {/* <h1>Contribution</h1>
            <meter  value="2" min="0" max="10">2 out of 10</meter> */}
            </div>

            </div>
                
            </div>
            </div>
        )
    }
}

export default Comparer
