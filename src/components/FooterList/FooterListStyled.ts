import styled from "@emotion/styled";

import chess from "../../assets/images/image-chess.webp"

export const FooterListStyled = styled.ul``

export const FooterItem = styled.li`
position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 28px;


  border-radius: 8px;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const FirstItem = styled.div`
&::after{
position: absolute;

top: 0;
right: 0;

transform: translate(0, 50%);

    content: "";

    display: inline-block;
    width: 39px;
    height: 39px;

    background-image: url(${chess});
    background-size: contain;
}
`

export const AvaThumb = styled.div`
width: 39px;
height: 39px;

margin-right: 12px;

& > img{
   width: 100%;
   height: 100%;

   object-fit: cover;
}
`

export const Content = styled.p`
margin-bottom: 4px;

font-size: 14px;
font-weight: 500;

color:#5E6778;


`

export const Login = styled.span`
font-size: 14px;
font-weight: 800;

color: #1C202B;
`

export const Club = styled.span`
font-size: 14px;
font-weight: 700;

color:#0A327B;
`

export const Game = styled.span`
font-size: 14px;
font-weight: 700;

color:#5E6778;
`

export const Time = styled.p`
font-size: 14px;
font-weight: 500;

color: rgba(147, 156, 173, 0.7)
`