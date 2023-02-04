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
  // let likes = [0,0,0];
  // let comments = [0,0,0];
  let [like,setLike] = useState([
    {id: 0, count: 0},
    {id: 1, count: 0},
    {id: 2, count: 0}
  ]);
  let [comment,setComment] = useState([
    {id: 0, count: 0},
    {id: 1, count: 0},
    {id: 2, count: 0}
  ]);

  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      {/* Nav Zone */}
      <Nav/>

      {/* Post Zone */}
      <div className='post-area'>
      {
        title.map((a,i) => {
          return (
            <div className='post' key={i}>
            <h4 onClick={()=>{setModal(!modal)}}>{a}</h4>
            <p onClick={()=>{setModal(!modal)}}>{content[i]}</p>
            <div className='like-comment-zone'>
              <span onClick={()=>{
                {
                  like[i].id === i ? like[i].count++ : null
                }
                  let result = [...like];
                  setLike(result);
                }}>❤</span> {like[i].count}
                &nbsp;&nbsp;
              <span onClick={()=>{
                {
                  comment[i].id === i ? comment[i].count++ : null
                }
                  let result = [...comment];
                  setComment(result);
                }}>✉</span> {comment[i].count}
            </div>

            {/* Detail Zone */}
            {
              modal === true ? <Modal/> : null
            }
          </div>
          )
        })
      }
      </div>

      {/* Button Zone */}
      <div className='btn-area'>
        <button className='rotate-btn' onClick={()=>{
          setTitle([title[1],title[2],title[0]]);
          setContent([content[1],content[2],content[0]]);
          setLike([like[1],like[2],like[0]]);
          setComment([comment[1],comment[2],comment[0]]);
        }}>Rotate</button>

        <button className='sort-btn' onClick={()=>{
          let cpTitle = [...title.sort()];
          let cpContent = [...content.sort()];
          let cpLike = [...like.sort((a,b) => {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          })];
          let cpComment = [...comment.sort((a,b) => {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          })];
          setTitle(cpTitle);
          setContent(cpContent);
          setLike(cpLike);
          setComment(cpComment);
        }}>Sort</button>
      </div>

      {/* Detail Zone
      {
        modal === true ? <Modal/> : null
      } */}
    </div>
  );
}

const Nav = () => {
  const nav_title = "Hwan Blog"

  return (
    <>
     <div className='black-nav'>
        <h4 onClick={() => {
          // setLike([
          //   {id: 0, count: 0},
          //   {id: 1, count: 0},
          //   {id: 2, count: 0}
          // ]);
          // setComment([
          //   {id: 0, count: 0},
          //   {id: 1, count: 0},
          //   {id: 2, count: 0}
          // ]);
        }}>{nav_title}</h4>
      </div>
    </>
  )
}

const Modal = (state) => {
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
