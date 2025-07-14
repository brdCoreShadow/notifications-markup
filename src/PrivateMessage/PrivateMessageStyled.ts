import styled from "@emotion/styled";

export const PrivateMessageCon = styled.div`
  margin-bottom: 24px;
`;

export const FlexCon = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 12px;
`;

export const AvaThumb = styled.div`
  width: 39px;
  height: 39px;

  margin-right: 12px;

  & > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const MsgWrapper = styled.div`
  text-align: right;
`;

export const MsgCon = styled.div`
  display: inline-block;

  width: 263px;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  text-align: left;

  border: 1px solid #dde7ee;

  @media (min-width: 1280px) {
    width: auto;

    margin-left: 84px;

    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
      background-color: #E5EFFA;

      cursor: pointer;

      transition: all 0.3s;
    }
  }

  & > p {
    font-size: 14px;
    font-weight: 500;

    color: #5e6778;

    @media (min-width: 1280px) {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
