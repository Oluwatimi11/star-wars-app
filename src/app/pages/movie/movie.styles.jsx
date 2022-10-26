import styled from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;

  @keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -170%;
    }
  }
`;

export const MovieBoard = styled.div`
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  transform: perspective(300px) rotateX(25deg);
  transform-origin: 50% 100%;
  text-align: justify;
  position: absolute;
  margin-left: -9em;
  font-weight: bold;
  overflow: hidden;
  font-size: 350%;
  height: 50em;
  width: 18em;
  bottom: 0;
  left: 50%;

  &:after {
    position: absolute;
    content: " ";
    bottom: 10%;
    left: 0;
    right: 0;
    top: 0;
  }
`;

export const MovieContent = styled.div`
  animation: scroll 90s linear .1s;
  position: absolute;
  top: 100%;
`;

export const MovieTitle = styled.h2`
  text-align: center;
`;

export const MovieSubTitle = styled.h4`
  text-align: center;
`;

export const MovieParagraph = styled.p`
  color: #ffff82;
`;

export const MovieTable = styled.div`
`;
