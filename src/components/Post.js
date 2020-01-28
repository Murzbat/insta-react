import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className = "post">
                <User 
                    src="https://pbs.twimg.com/profile_images/998476580073627649/8XN0oH_b_400x400.jpg"
                    alt="prince"
                    name="Dilys_carapuz_Shinoda" 
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    ergreggreg
                </div> 
            </div>
        )
    }
}