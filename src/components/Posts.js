import { faEllipsisVertical, faHeart, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import "./Posts.css"
import ppost from '../assets/1.jpg';


const Posts = () => {
    const [showOptions,setshowOptions]=useState(false)
    const onClicking3dots=()=>{
        setshowOptions(true)
    } 
    const turnof=()=>{
        setshowOptions(false)
    }
    return (
        <div className="posts">
            <div className="post1">
                <div>
                    <img src="data:image/jpeg;base64,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"/>
                </div>
                <div className="post1-a"><p className="name">pheobe</p>
                <p className="time">10 hours ago</p></div>
                <h4><FontAwesomeIcon className="home-icons" 
                onClick={showOptions?turnof:onClicking3dots}
                icon={faEllipsisVertical}/></h4>
               {showOptions?
                <div className="dots-options"
                value={showOptions}>
                    <h4 onClick={turnof}>save</h4>
                    <h4 onClick={turnof}>share</h4>
                    <h4 onClick={turnof}>report</h4>
                </div>:""}
            </div>
            <div className="post2">
                <img src={ppost} alt="post"/>
            </div>
            <div className="post3">
                <h4><FontAwesomeIcon className="like" icon={faHeart}/></h4>
                <h4><FontAwesomeIcon className="like" icon={faMessage}/></h4>
            </div>
            
        </div>
    )
}

export default Posts
