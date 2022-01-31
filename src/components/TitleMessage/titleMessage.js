import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import "./title.css";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.styled};
    text-shadow: 0px 2px 5px rgba(255, 255, 255, 0.4);
    font-weight: 100;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3" id="name">
          <span>
            <strong>Walter Vela</strong>
          </span>
        </div>
        <div className="sub" id="name2">
          <Typewriter
            options={{
              strings: ["Web Developer", "Fast Learner", "Tech Enthusiast"],
              autoStart: true,
              loop: true,
              delay: 53
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
