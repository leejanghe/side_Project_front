import React from "react";
// import { HeaderWrapper } from "../../css/Header.styled";
import styled from "styled-components";
import { RiShuffleLine } from "react-icons/ri";
import Search from "../search/Search";
// import logo from "assets/images/logo.png";
import logo from "../../assets/imgs/logo.png";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  /* padding: 1rem; */
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e5e5e5;

  > div {
    max-width: 1280px;
    min-width: 1280px;
    /* width: 100%; */
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    .leftText {
      cursor: pointer;
      display: flex;
      align-items: center;
      > img {
        width: 25px;
        height: 25px;
      }
      > p {
        margin-left: 10px;
        font-size: 30px;
        font-weight: 600;
      }
    }
    .rightText {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #5a188d;
      .hoverLine {
        &:hover {
          border-radius: 50%;
          background: #f4f4f5;
        }
      }
      > p {
        margin-left: 0.75rem;
        font-weight: 600;
        font-size: 16px;
        display: flex;
        align-items: center;
      }

      > span {
        margin-left: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        > svg {
          color: #71717a;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

function Header(props) {
  const navigate = useNavigate();

  const onClickHomBtn = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <div>
        <div className="leftText" onClick={onClickHomBtn}>
          <img src={logo} alt="logo" />
          <p>ccoli</p>
        </div>
        <div className="rightText">
          <Search />
          <span className="hoverLine">
            <RiShuffleLine />
          </span>
          <span>로그인</span>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
