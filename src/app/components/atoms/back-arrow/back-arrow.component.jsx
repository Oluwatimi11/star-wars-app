import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  left: 0;
  top: -30px;
  cursor: pointer;
  font-weight: 550;
  margin: 1rem;
`;

export const ArrowLink = styled(Link)`
  list-style-item: none;
  color: #fff;
  text-decoration:none;
`;

const BackArrow = () => {
  return (
    <ArrowLink to="/">
      <Wrapper>
        <BiArrowBack size={24} />
        Go Back
      </Wrapper>
    </ArrowLink>
  );
};

export default BackArrow;
