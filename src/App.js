import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nav_title = "Hwan Blog";
  let [title1, setTitle1] = useState('오늘 저녁 리뷰');
  let [content1, setContent1] = useState('고기를 먹었다. 맛있었다. 고기는 최고야');
  let [title2, setTitle2] = useState('내일 점심 뭐먹지');
  let [content2, setContent2] = useState('저녁먹고 다음날 점심을 고민하는 나, 돼지인걸까?');
  let [title3, setTitle3] = useState('그냥 뻘글');
  let [content3, setContent3] = useState('블로그는 원래 생각없이 쓰는거야');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{nav_title}</h4>
      </div>
      <div className='post'>
        <h4>{title1}</h4>
        <p>{content1}</p>
      </div>
      <div className='post'>
        <h4>{title2}</h4>
        <p>{content2}</p>
      </div>
      <div className='post'>
        <h4>{title3}</h4>
        <p>{content3}</p>
      </div>
    </div>
  );
}

export default App;
