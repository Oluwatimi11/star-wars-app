import styled from "styled-components";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

export const StarDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Stars = styled.div`
  .star {
    position: absolute;
    width: 1px;
    min-height: 100vh;
    background-color: white;
  }
`;

export const StarDropDownList = styled(DropDownListComponent)`
  background-color: gold;
  color: #000;
  padding-left: 1.5rem;
`;

export const StarDropDown = styled.div`
  margin: 1rem auto auto 2rem;
  width: 250px;
  background-color: gold;
  color: #000;
  border-radius: 8px;
`;

export const StarLogo = styled.section`
  margin: auto;
  z-index: 1;
  margin: auto;
  animation: logo 9s ease-out 9s;
  opacity: 1;

  // .logo svg {
  //   width: inherit;
  // }

  // /* Scale the logo down and maintain it centered */
  // @keyframes logo {
  //   0% {
  //     width: 18em;
  //     transform: scale(2.75);
  //     opacity: 1;
  //   }
  //   50% {
  //     opacity: 1;
  //     width: 18em;
  //   }
  //   100% {
  //     opacity: 0;
  //     transform: scale(0.1);
  //     width: 18em;
  //   }
  // }
`;

export const StarImg = styled.img`
  width: 800px;
  height: 700px;
`;
