import styled from "@emotion/styled";

export const EventsList = styled.ul`
  margin-bottom: 12px;
`;

export const EventsItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 28px;

  background-color: #f7fafd;

  border-radius: 8px;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

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

&::after{
    display: inline-block;
    content: "";

    width: 8px;
    height: 8px;

    margin-left: 8px;

    background-color: #FF3333;

    border-radius: 50%;
}
`

export const Login = styled.span`
font-size: 14px;
font-weight: 800;

color: #1C202B;
`

export const Event = styled.span`
font-size: 14px;
font-weight: 700;

color:#5E6778;
`

export const Time = styled.p`
font-size: 14px;
font-weight: 500;

color: rgba(147, 156, 173, 0.7)
`