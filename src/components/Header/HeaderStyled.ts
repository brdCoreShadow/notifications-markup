import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const LogoCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > h1 {
    margin-right: 8px;

    font-size: 20px;
    font-weight: 800;
  }
`;

export const LogoBox = styled.div`
  padding-top: 2px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;

  background-color: #0a327b;

  border-radius: 8px;

  & > span {
    font-size: 16px;
    font-weight: 800;

    color: #fff;
  }
`;

export const HeaderBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: "Jakarta";

  color: #5e6778;

  background-color: transparent;

  transition: color 0.3s;

  &:hover,
  &:focus,
  &:active {
    color: #0a327b;

    cursor: pointer;

    transition: color 0.3s;
  }
`;
