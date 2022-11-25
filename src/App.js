/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {
  const nav_title = "Hwan Blog";
  let [title, setTitle] = useState(['오늘 저녁 리뷰','내일 점심 뭐먹지','그냥 뻘글']);
  let [content, setContent] = useState(['고기를 먹었다. 맛있었다. 고기는 최고야'
  ,'저녁먹고 다음날 점심을 고민하는 나, 돼지인걸까?'
  ,'블로그는 원래 생각없이 쓰는거야']);

  let likeCount = useState(0);
  let commentCount = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{nav_title}</h4>
      </div>
      <div className='post'>
        <h4>{title[0]}</h4>
        <p>{content[0]}</p>
        <div className='like-comment-zone'>
          <span>❤</span> {likeCount}  &nbsp;&nbsp; <span>✉</span> {commentCount}
        </div>
      </div>
      <div className='post'>
        <h4>{title[1]}</h4>
        <p>{content[1]}</p>
        <div className='like-comment-zone'>
          <span>❤</span> {likeCount}  &nbsp;&nbsp; <span>✉</span> {commentCount}
        </div>
      </div>
      <div className='post'>
        <h4>{title[2]}</h4>
        <p>{content[2]}</p>
        <div className='like-comment-zone'>
          <span>❤</span> {likeCount}  &nbsp;&nbsp; <span>✉</span> {commentCount}
        </div>
      </div>
    </div>
  );
}

export default App;
