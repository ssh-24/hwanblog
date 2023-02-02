/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(
    [
      '1.오늘 저녁 리뷰'
      ,'2.내일 점심 뭐먹지'
      ,'3.그냥 뻘글'
    ]
  );
  let [content, setContent] = useState(
    [
      '1.고기를 먹었다. 맛있었다. 고기는 최고야'
      ,'2.저녁먹고 다음날 점심을 고민하는 나, 돼지인걸까?'
      ,'3.블로그는 원래 생각없이 쓰는거야'
    ]
  );

  let [likeCount,setLike] = useState([0,0,0]);
  let [commentCount,setComment] = useState([0,0,0]);

  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      {/* Nav Zone */}
      <Nav/>

      {/* Post Zone */}
      <div className='post-area'>
        <div className='post'>
          <h4 onClick={()=>{setModal(!modal)}}>{title[0]}</h4>
          <p onClick={()=>{setModal(!modal)}}>{content[0]}</p>
          <div className='like-comment-zone'>
            <span onClick={()=>{setLike([likeCount[0]+1,likeCount[1],likeCount[2]])}}>❤</span> {likeCount[0]}
              &nbsp;&nbsp;
            <span onClick={()=>{setComment([commentCount[0]+1,commentCount[1],commentCount[2]])}}>✉</span> {commentCount[0]}
          </div>
        </div>

        <div className='post'>
          <h4 onClick={()=>{setModal(!modal)}}>{title[1]}</h4>
          <p onClick={()=>{setModal(!modal)}}>{content[1]}</p>
          <div className='like-comment-zone'>
            <span onClick={()=>{setLike([likeCount[0],likeCount[1]+1,likeCount[2]])}}>❤</span> {likeCount[1]}
              &nbsp;&nbsp;
            <span onClick={()=>{setComment([commentCount[0],commentCount[1]+1,commentCount[2]])}}>✉</span> {commentCount[1]}
          </div>
        </div>

        <div className='post'>
          <h4 onClick={()=>{setModal(!modal)}}>{title[2]}</h4>
          <p onClick={()=>{setModal(!modal)}}>{content[2]}</p>
          <div className='like-comment-zone'>
            <span onClick={()=>{setLike([likeCount[0],likeCount[1],likeCount[2]+1])}}>❤</span> {likeCount[2]}
              &nbsp;&nbsp;
            <span onClick={()=>{setComment([commentCount[0],commentCount[1],commentCount[2]+1])}}>✉</span> {commentCount[2]}
          </div>
        </div>
      </div>

      {/* Button Zone */}
      <div className='btn-area'>
        <button className='rotate-btn' onClick={()=>{
          setTitle([title[1],title[2],title[0]]);
          setContent([content[1],content[2],content[0]]);
          setLike([likeCount[1],likeCount[2],likeCount[0]]);
          setComment([commentCount[1],commentCount[2],commentCount[0]]);
        }}>Rotate</button>

        <button className='sort-btn' onClick={()=>{
          let cpTitle = [...title.sort()];
          let cpContent = [...content.sort()];
          setTitle(cpTitle);
          setContent(cpContent);
        }}>Sort</button>
      </div>

      {/* Detail Zone */}
      {
        modal === true ? <Modal/> : null
      }
    </div>
  );
}

const Nav = () => {
  const nav_title = "Hwan Blog"

  return (
    <>
     <div className='black-nav'>
        <h4>{nav_title}</h4>
      </div>
    </>
  )
}

const Modal = () => {
  return (
    <>
      <div className='detail-area'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세</p>
      </div>
    </>
  )
}

export default App;
