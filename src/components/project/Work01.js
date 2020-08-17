import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

const Work01Block = styled.div`
  width: 100%;
  background: #fff;
  margin-left: 300px;
  margin-top: 50px;
  .back {
    margin-left: 50px;
    font-weight: 600;
    display: flex;
    align-items: center;
    letter-spacing: 0.05rem;
  }
  .backicon {
    font-size: 1.4rem;
  }
  .date {
    margin-top: 20px;
    margin-left: 60px;
    letter-spacing: 0.05rem;
  }
  h3 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
    margin-top: 10px;
    margin-left: 50px;
    letter-spacing: 0.05rem;
  }
  h3 a {
    background: #212529;
    color: #fff;
    margin-left: 7px;
    padding: 4px 7px;
    border-radius: 5px;
    letter-spacing: 0.03rem;
    font-size: 0.8rem;
    font-weight: 100;
    cursor: pointer;
  }
  h3 a:first-child {
    margin-left: 15px;
  }
  .descript {
    font-size: 0.9rem;
    margin-left: 50px;
    margin-top: 20px;
    line-height: 1.7rem;
    letter-spacing: 0.05rem;
  }
  .image-gallery {
    margin-top: 20px;
    width: 50%;
    margin-left: 50px;
  }
  .image-gallery-play-button {
    display: none;
  }
  .image-gallery-svg {
    width: 25px;
  }
`;
const images = [
  {
    original:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/react02.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/react02thum.png?raw=true',
  },
];

function Work01() {
  return (
    <Work01Block>
      <NavLink className="back" to="/Project">
        <FaAngleLeft className="backicon" />
        돌아가기
      </NavLink>
      <p className="date">2020.07-2020.08</p>
      <h3>
        Todo List ver2 제작
        <a href="http://lsh58.github.io/react_todo2" target="_blank">
          웹페이지 바로가기
        </a>
        <a href="https://github.com/lsh58/react_todo2" target="_blank">
          GitHub 바로가기
        </a>
      </h3>
      <ImageGallery items={images} thumbnailPosition={'right'} />
      <p className="descript">
        - 개발언어 : React / Javascript / Styled-components
        <br />- Hooks를 활용한 기능구현 (useState, useRef, useReducer,
        useContext, customHooks)
        <br />- Context api를 활용한 데이터 전달 구현
        <br />- 매일 날짜 업데이트, 남은 할일 카운트, 전체목록/남은목록/완료목록
        구분해서 나오도록 구현
      </p>
    </Work01Block>
  );
}

export default Work01;
