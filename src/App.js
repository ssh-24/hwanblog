/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {
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
      <Nav/>

      {/* Post Zone */}
      <div className='post-area'>
      {
        title.map((a,i) => {
          return (
            <div className='post' key={i} onClick={(e)=>{
              if (true) {
                console.log(e.target.className);
              }
              modal[i].clicked = !modal[i].clicked
              let result = [...modal];
              setModal(result)
            }}>
              {/* 제목 */}
              <h4>{a}</h4>
              {/* 작성일 */}
              <span className='w-date'>{date[i].date}</span>
              {/* 본문 */}
              <p>{content[i]}</p>
              {/* 좋아요/댓글 */}
              <div className='like-comment-zone'>
                <span onClick={(e)=>{
                    e.stopPropagation();
                    like[i].count++
                    let result = [...like];
                    setLike(result);
                }}>❤</span> {like[i].count}
                &nbsp;&nbsp;&nbsp;
                <span onClick={(e)=>{
                    e.stopPropagation();
                    comment[i].count++;
                    let result = [...comment];
                    setComment(result);
                }}>✉</span> {comment[i].count}
              </div>
            {/* 모달 */}
            {
              modal[i].clicked === true ? 
              <Modal seq={i} title={title} content={content} like={like} comment={comment} date={date}/>
              : null
            }
            {/* 삭제버튼 */}
            <button className='delete-btn' onClick={(e)=> {
                e.stopPropagation();
                let cpTitle = [...title];
                let cpContent = [...content];
                cpTitle.splice(i,1);
                cpContent.splice(i,1);
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
        <h3>글쓰기</h3>
        <input type="date" id='date-enroll' onBlur={(e)=>{
          dateStr = e.target.value;
        }}/>
        <input type="text" id='title-enroll' placeholder='글 제목' onBlur={(e)=>{
          newTitle = e.target.value;
        }}/>
        <textarea id='content-enroll' placeholder='내용' onBlur={(e)=>{
          newContent = e.target.value;
        }}/>
        <button className='enroll-btn' onClick={() => {
          if (!!(newTitle === '' || newContent === '' || dateStr === '')) {
            //입력 없을 시 예외처리
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

          setTitle(cpTitle);
          setContent(cpContent);
          setDate(cpDate);
          setModal(cpModal);
          setLike(cpLike);
          setComment(cpComment);
        }}>Create</button>
      </div>

    </div>
  );
}

const Nav = () => {
  const nav_title = "Hwan Blog"
  return (
    <>
     <div className='black-nav'>
        <h4 onClick={() => {
          alert("(●'◡'●)");
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
