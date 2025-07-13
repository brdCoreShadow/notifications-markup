import * as SC from "./EventListStyled"

import webereAva from "../../assets/images/avatar-mark-webber.webp";
import grayAva from "../../assets/images/avatar-angela-gray.webp"
import thompsonAva from "../../assets/images/avatar-jacob-thompson.webp"
const EventList = () => {
    return ( 
        <SC.EventsList>
        <SC.EventsItem>
          <SC.AvaThumb>
            <img src={webereAva} alt="webere_ava" />
          </SC.AvaThumb>
          <div>
            <SC.Content>
              <SC.Login>Mark Webber</SC.Login> reacted to your recent post{" "}
              <SC.Event>My first tournament today!</SC.Event>
            </SC.Content>
            <SC.Time>1m ago</SC.Time>
            <div></div>
          </div>
        </SC.EventsItem>
        <SC.EventsItem>
          <SC.AvaThumb>
            <img src={grayAva} alt="gray_ava" />
          </SC.AvaThumb>
          <div>
            <SC.Content>
              <SC.Login>Angela Gray</SC.Login> folowed you
            </SC.Content>
            <SC.Time>5m ago</SC.Time>
            <div></div>
          </div>
        </SC.EventsItem>
        <SC.EventsItem>
           <SC.AvaThumb>
            <img src={thompsonAva} alt="thompson_ava" />
          </SC.AvaThumb>
          <div>
            <SC.Content>
              <SC.Login>Jacob Thompson</SC.Login> has joined your group <SC.Event>Chess Club</SC.Event>
            </SC.Content>
            <SC.Time>1 day ago</SC.Time>
            <div></div>
          </div>
        </SC.EventsItem>
      </SC.EventsList>
     );
}
 
export default EventList;