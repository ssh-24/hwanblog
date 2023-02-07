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

  let [modal, setModal] = useState([
    {id: 0, clicked: false},
    {id: 1, clicked: false},
    {id: 2, clicked: false}
  ]);

  let [date, setDate] = useState([
    {id: 0, date: '2023-02-05'},
    {id: 1, date: '2023-02-06'},
    {id: 2, date: '2023-02-07'}
  ]);

  return (
    <div className="App">
      {/* Nav Zone */}
      <Nav
       title={title}
       setTitle={setTitle}
       content={content}
       setContent={setContent}
       like={like}
       setLike={setLike} 
       comment={comment} 
       setComment={setComment}
       modal={modal}
       setModal={setModal}
       date={date}
       setDate={setDate}
      />

      {/* Post Zone */}
      <div className='post-area'>
      {
        title.map((a,i) => {
          return (
            <div className='post' key={i}>
              <h4 onClick={()=>{
                modal[i].clicked = !modal[i].clicked
                let result = [...modal];
                setModal(result)
                }}>{a}</h4>

              <span onClick={()=>{
                modal[i].clicked = !modal[i].clicked
                let result = [...modal];
                setModal(result)
                }}>작성일 : {date[i].date}</span>

              <p onClick={()=>{
                modal[i].clicked = !modal[i].clicked
                let result = [...modal];
                setModal(result)
                }}>{content[i]}</p>

              <div className='like-comment-zone'>
                <span onClick={()=>{
                    like[i].count++
                    let result = [...like];
                    setLike(result);
                  }}>❤</span> {like[i].count}
                  &nbsp;&nbsp;
                <span onClick={()=>{
                    comment[i].count++;
                    let result = [...comment];
                    setComment(result);
                  }}>✉</span> {comment[i].count}
              </div>
            {/* Detail Zone */}
            {
              modal[i].clicked === true ? 
              <Modal seq={i} title={title} content={content} like={like} comment={comment} date={date}/>
              : null
            }
              <button className='delete-btn' id={"post"+i} onClick={(e)=> {
                console.log(e.target.id);
                let selectedIdx = +e.target.id.replace("post",'');
                let cpTitle = [...title];
                let cpContent = [...content];
                cpTitle.splice(selectedIdx,1);
                cpContent.splice(selectedIdx,1);
                setTitle(cpTitle);
                setContent(cpContent);
              }}>Delete</button>
            </div>
          )
        })
      }
      </div>

      {/* Button Zone */}
      <div className='btn-area'>
        <button className='rotate-btn' onClick={()=>{
          if (title.length < 3) { //임시 예외처리
            return false;
          }
          setTitle([title[1],title[2],title[0]]);
          setContent([content[1],content[2],content[0]]);
          setLike([like[1],like[2],like[0]]);
          setComment([comment[1],comment[2],comment[0]]);
          setModal([modal[1],modal[2],modal[0]]);
          setDate([date[1],date[2],date[0]]);
        }}>Rotate</button>

        <button className='sort-btn' onClick={()=>{
          if (title.length < 3) { //임시 예외처리
            return false;
          }
          let cpTitle = [...title.sort()];
          let cpContent = [...content.sort()];
          let cpLike = [...like.sort((a,b) => a.id - b.id)];
          let cpComment = [...comment.sort((a,b) => a.id - b.id)];
          let cpModal = [...modal.sort((a,b) => a.id - b.id)];
          let cpDate = [...date.sort((a,b) => a.id - b.id)];
          setTitle(cpTitle);
          setContent(cpContent);
          setLike(cpLike);
          setComment(cpComment);
          setModal(cpModal);
          setDate(cpDate);
        }}>Sort</button>
      </div>

      {/* Input Zone */}
      <div className='input-area'>
        <input type="date" id='date-enroll'/>
        <input type="text"/>
        <textarea/>
        <button className='enroll-btn' onClick={() => {
          console.log("등록");
        }}>Create</button>
      </div>

    </div>
  );
}

const Nav = (props) => {
  const nav_title = "Hwan Blog"
  return (
    <>
     <div className='black-nav'>
        <h4 onClick={() => {
          alert("(●'◡'●)");
          let cpTitle = [...props.title.sort()];
          let cpContent = [...props.content.sort()];
          props.setTitle(cpTitle);
          props.setContent(cpContent);
          props.setLike([
            {id: 0, count: 0},
            {id: 1, count: 0},
            {id: 2, count: 0}
          ]);
          props.setComment([
            {id: 0, count: 0},
            {id: 1, count: 0},
            {id: 2, count: 0}
          ]);
          props.setModal([
            {id: 0, clicked: false},
            {id: 1, clicked: false},
            {id: 2, clicked: false}
          ]);
          props.setDate([
            {id: 0, date: '2023-02-05'},
            {id: 1, date: '2023-02-06'},
            {id: 2, date: '2023-02-07'}
          ]);
        }}>{nav_title}</h4>
      </div>
    </>
  )
}

const Modal = (props) => {
  return (
    <>
      <div className='detail-area'>
          <h4>{props.title[props.seq]}</h4>
          <p>{props.date[props.seq].date}</p>
          <p>{props.content[props.seq]}</p>
          <div>
            <p>좋아요 {props.like[props.seq].count}</p>
            <p>댓글 {props.comment[props.seq].count}</p>
          </div>
      </div>
    </>
  )
}

export default App;
