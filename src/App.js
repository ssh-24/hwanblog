/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {
  const nav_title = "Hwan Blog";
  let [title, setTitle] = useState(
    [
      '오늘 저녁 리뷰'
      ,'내일 점심 뭐먹지'
      ,'그냥 뻘글'
    ]
  );
  let [content, setContent] = useState(
    [
      '고기를 먹었다. 맛있었다. 고기는 최고야'
      ,'저녁먹고 다음날 점심을 고민하는 나, 돼지인걸까?'
      ,'블로그는 원래 생각없이 쓰는거야'
    ]
  );

  let [likeCount,setLike] = useState([0,0,0]);
  let [commentCount,setComment] = useState([0,0,0]);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{nav_title}</h4>
      </div>

      <div className='post'>
        <h4>{title[0]}</h4>
        <p>{content[0]}</p>
        <div className='like-comment-zone'>
          <span onClick={()=>{setLike([likeCount[0]+1,likeCount[1],likeCount[2]])}}>❤</span> {likeCount[0]}
            &nbsp;&nbsp;
          <span onClick={()=>{setComment([commentCount[0]+1,commentCount[1],commentCount[2]])}}>✉</span> {commentCount[0]}
        </div>
      </div>

      <div className='post'>
        <h4>{title[1]}</h4>
        <p>{content[1]}</p>
        <div className='like-comment-zone'>
          <span onClick={()=>{setLike([likeCount[0],likeCount[1]+1,likeCount[2]])}}>❤</span> {likeCount[1]}
            &nbsp;&nbsp;
          <span onClick={()=>{setComment([commentCount[0],commentCount[1]+1,commentCount[2]])}}>✉</span> {commentCount[1]}
        </div>
      </div>

      <div className='post'>
        <h4>{title[2]}</h4>
        <p>{content[2]}</p>
        <div className='like-comment-zone'>
          <span onClick={()=>{setLike([likeCount[0],likeCount[1],likeCount[2]+1])}}>❤</span> {likeCount[2]}
            &nbsp;&nbsp;
          <span onClick={()=>{setComment([commentCount[0],commentCount[1],commentCount[2]+1])}}>✉</span> {commentCount[2]}
        </div>
      </div>

      <button className='rotate-btn' onClick={()=>{
        setTitle([title[1],title[2],title[0]]);
        setContent([content[1],content[2],content[0]]);
        setLike([likeCount[1],likeCount[2],likeCount[0]]);
        setComment([commentCount[1],commentCount[2],commentCount[0]]);
      }}>Rotate</button>
    </div>
  );
}

export default App;
