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

  let newTitle = '';
  let newContent = '';
  let dateStr = '';

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
          let seq = title.length

          let rttTitle = [];
          let rttContent = [];
          let rttLike = [];
          let rttComment = [];
          let rttModal = [];
          let rttDate = [];

          for (let i = 0; i < seq; i++) {
            if(i === seq-1) {
              rttTitle.push(title[0]);
              rttContent.push(content[0]);
              rttLike.push(like[0]);
              rttComment.push(comment[0]);
              rttModal.push(modal[0]);
              rttDate.push(date[0]);
            }
            else {
            rttTitle.push(title[i+1]);
            rttContent.push(content[i+1]);
            rttLike.push(like[i+1]);
            rttComment.push(comment[i+1]);
            rttModal.push(modal[i+1]);
            rttDate.push(date[i+1]);
            }
          }

          console.log(rttTitle);
          console.log(rttContent);
          console.log(rttLike);
          console.log(rttComment);
          console.log(rttModal);
          console.log(rttDate);
          
          setTitle(rttTitle);
          setContent(rttContent);
          setLike(rttLike);
          setComment(rttComment);
          setModal(rttModal);
          setDate(rttDate);
        }}>Rotate</button>

        <button className='sort-btn' onClick={()=>{
          let seq = title.length

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
        <input type="date" id='date-enroll' onBlur={(e)=>{
          console.log("작성일 : ",e.target.value);
          dateStr = e.target.value;
        }}/>
        <input type="text" id='title-enroll' onBlur={(e)=>{
          console.log("글제목 : ",e.target.value);
          newTitle = e.target.value;
        }}/>
        <textarea id='content-enroll' onBlur={(e)=>{
          console.log("내용 : ",e.target.value);
          newContent = e.target.value;
        }}/>
        <button className='enroll-btn' onClick={() => {
          if (!!(newTitle === '' || newContent === '' || dateStr === '')) {
            //아무 입력 없을 시 예외처리
            alert("입력사항을 모두 작성해주세요")
            return false;
          }

          let seq = title.length
          
          let newLike = {
            id : seq,
            count : 0
          }
          let newComment = {
            id : seq,
            count : 0
          }
          let newModal = {
            id : seq,
            clicked: false
          }
          let newDate = {
            id : seq,
            date : dateStr
          }
 
          let cpTitle = [...title];
          let cpContent = [...content];
          let cpDate = [...date];
          let cpModal = [...modal];
          let cpLike = [...like];
          let cpComment = [...comment];

          cpTitle.push(newTitle);
          cpContent.push(newContent);
          cpDate.push(newDate);
          cpModal.push(newModal);
          cpLike.push(newLike);
          cpComment.push(newComment);


          console.log(cpTitle);
          console.log(cpContent);
          console.log(cpDate);
          console.log(cpModal);
          console.log(cpLike);
          console.log(cpComment);

          setTitle(cpTitle);
          setContent(cpContent);
          setDate(cpDate);
          setModal(cpModal);
          setLike(cpLike);
          setComment(cpComment);

          console.log("");
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
