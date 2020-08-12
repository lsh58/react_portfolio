import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import backsrc from '../asset/stacks/react.png';

const ContentsBlock = styled.div`
  width: 80%;
  section {
    margin-left: 50px;
    margin-top: 50px;
  }
  section:nth-of-type(2) {
    margin-top: 30px;
  }
  h2 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
  }
  p {
    color: #212529;
    font-size: 16px;
    letter-spacing: 0.03rem;
    line-height: 24px;
    margin-top: 15px;
    margin-left: 10px;
  }
  .email {
    color: #1c7ed6;
    cursor: pointer;
    position: relative;
  }
  .copied {
    background: #212529;
    bottom: -15px;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    height: 25px;
    left: 50%;
    opacity: 0;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    transition: 0.5s;
    width: 60px;
  }
  .stacks {
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
  }
  .stacks span {
    border: 2px solid #212529;
    border-radius: 5px;
    font-size: 0;
    height: 80px;
    margin-right: 10px;
    width: 80px;
    background: url(${backsrc}) no-repeat center/ cover;
  }
`;

function Contents() {
  const copied = useRef(null);
  const stacks = useRef(null);

  function copyText(e) {
    e.preventDefault();
    copied.current.style = `bottom :-28px; opacity :1`;
    setTimeout(function () {
      copied.current.style = `bottom :-15px; opacity :0`;
    }, 500);
  }

  useEffect(() => {
    for (var i = 0; i < stacks.current.children.length; i++) {
      console.log(stacks.current.children[i].innerHTML);
    }
  }, []);

  return (
    <ContentsBlock>
      <section>
        <h2>안녕하세요</h2>
        <p>
          만들기를 좋아하고 삶에서 일의 의미와 가치를 중요하게 생각하는
          이승현입니다.
          <br /> 프론트엔드 개발자로 일하기 위해 준비하고 있으며, 기술과
          디자인에 관심이 많습니다.
          <br /> 공통된 목적이 있는 사람들과 함께 지낼 때 행복감을 느끼며, 편한
          사람들과 마시는 맥주와 커피를 가장 좋아합니다.
          <br />
          저에 대해 궁금한 점이 있으시면&nbsp;
          <span className="email" onClick={copyText}>
            tmdgusdl58@gmail.com
            <span className="copied" ref={copied}>
              Copied!
            </span>
          </span>
          로 연락 주세요. 감사합니다.
        </p>
      </section>
      <section>
        <h2>Tech Stack</h2>
        <p>
          온라인 컨텐츠 제작 업무를 거쳐 현재는 프론트엔드 개발분야로 배움의
          폭을 넓히고 있습니다.
          <br /> HTML5, CSS3, Javascript(ES6), ajax, React, Sass 등을 활용한
          퍼블리싱과 프론트 영역 개발 경험이 있습니다.
          <br /> Javascript 언어를 가장 좋아하고, 현재는 React 공부에 매진하고
          있습니다.
        </p>
        <div className="stacks" ref={stacks}>
          <span>React</span>
          <span>Javascript</span>
          <span>ES6</span>
          <span>Styled-Components</span>
          <span>Sass</span>
        </div>
      </section>
    </ContentsBlock>
  );
}

export default Contents;
