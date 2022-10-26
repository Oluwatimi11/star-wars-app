import styled from "styled-components";
import { Link } from "react-router-dom";


export const DropDownDiv = styled.div`
  background-color: gold;
  margin: 1rem;
  width: 20%;
  height: 40px;
  font-size: 18px;
  color: #000;
  font-weight: 600;
  border-radius: 5px;
  position: relative;
  user-select: none;
`;

export const DropDownLink = styled(Link)`
  list-style-item: none;
  color: #000;
  text-decoration:none;
`;

export const DropDownHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: transparent;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: bold;
  cursor: pointer;
`;

export const DropDownContent = styled.div`
  background-color: gold;
  width: 95%;
  font-size: 20px;
  color: #333;
  font-weight: 500;
  position: abssolute;
  top: 110%;
  left: 0;
  padding: 10px;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
`;

export const DropDownItem = styled.div`
    padding: 10px;
   cursor: pointer;
   transition: all 0.2s;


  &:hover {
    background: white;
    width: 100%;
    border-radius: 5px;
  }
`;

export const DropDownSpan = styled.div`
  padding-top: 0.2rem;
`;

