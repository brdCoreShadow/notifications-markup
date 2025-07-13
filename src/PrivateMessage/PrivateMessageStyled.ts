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

  border: 1px solid #dde7ee;

  & > p {
    font-size: 14px;
    font-weight: 500;

    color: #5e6778;
  }
`;
