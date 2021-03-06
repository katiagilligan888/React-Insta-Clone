import React from 'react'
import "./PostContainer.css"
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'; 
import styled from 'styled-components'; 

const Container = styled.article`
    display: flex; 
    flex-direction: column; 
    margin: 0 auto; 
    margin-top: 70px; 
    justify-content: center; 
    align-items: center; 
    width: 72%; 
    border: 1px solid lightgrey; 
    border-radius: 3px; 
    
`
const User = styled.div`
    display: flex; 
    align-self: flex-start; 
    justify-content: center; 
    align-items: center; 
    margin-left: 3%; 
    margin-top: 10px;  
    margin-bottom: 8px;
`
const UserNameImg = styled.img`
    border-radius: 50%; 
    margin-right: 10px; 
`
const UserName = styled.h4`
    font-size:  16px; 
    font-weight: bold; 
`
const UserPostImage = styled.img`
    width: 100%; 
    margin: 0 auto; 
`

const PostIcons = styled.div`
    display: flex; 
    flex-direction: column; 
    align-self: flex-start; 
    margin-left: 3%; 
`

const CommentsContainer = styled.div`
    align-self: flex-start; 
    margin-left: 3%; 
`

class PostContainer extends React.Component {
   constructor(props){
       super(props); 
        this.state = { 
            likes: props.likes,
            increaseLikes: false
        }
   } 
  
   increaseLikeHandler = (event) => {
       if(this.state.increaseLikes === false){
            this.setState(prevState =>{
            return {
                likes: prevState.likes + 1, 
                increaseLikes: true
            }
            })
        }else {
            this.setState(prevState => {
                return {
                    likes: prevState.likes - 1, 
                    increaseLikes: false
                }
            })
        }   
    }

  
    render (){
    return (

    <Container>
        <User>
            <UserNameImg src = {this.props.usernameImg} alt = "User Picture" width = "40px" height = "40px"/>
            <UserName>{this.props.username}</UserName>
        </User>
        <div>
            <UserPostImage src = {this.props.img}/>    
        </div>
        <PostIcons>
            <div className = 'icons'>
                <i onClick = {this.increaseLikeHandler} className = {"far fa-2x fa-heart " + (this.state.increaseLikes ? ' red' : null)} ></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <p className = "likes">{this.state.likes} likes</p>
        </PostIcons>
        <CommentsContainer>
            <CommentSection comments = {this.props.comments} 
                            timeStamp = {this.props.timeStamp}/>
        </CommentsContainer>

    </Container>
    )
  }
}

PostContainer.propTypes = {
    usernameImg : PropTypes.string, 
    username : PropTypes.string, 
    img: PropTypes.string, 
    likes: PropTypes.number,
    timeStamp: PropTypes.string, 
    comments : PropTypes.arrayOf(PropTypes.object),
}

export default PostContainer; 