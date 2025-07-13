import * as SC from "./FooterListStyled";

import smithAva from "../../assets/images/avatar-kimberly-smith.webp";
import petersonAva from "../../assets/images/avatar-nathan-peterson.webp";
import kimAva from "../../assets/images/avatar-anna-kim.webp"

const FooterList: React.FC = () => {
  return (
    <SC.FooterListStyled>
      <SC.FooterItem>
        <SC.AvaThumb>
          <img src={smithAva} alt="smithAva" />
        </SC.AvaThumb>
        <SC.FirstItem>
          <SC.Content>
            <SC.Login>Kimberly Smith</SC.Login> commented on your picture
          </SC.Content>
          <SC.Time>1 week ago</SC.Time>
        </SC.FirstItem>
      </SC.FooterItem>
      <SC.FooterItem>
        {" "}
        <SC.AvaThumb>
          <img src={petersonAva} alt="petersonAva" />
        </SC.AvaThumb>
        <div>
          <SC.Content>
            <SC.Login> Nathan Peterson</SC.Login> reacted to your recent post
            <SC.Game>5 end-game strategies to increase your win rate</SC.Game>
          </SC.Content>
          <SC.Time>2 weeks ago</SC.Time>
        </div>
      </SC.FooterItem>
      <SC.FooterItem>
        {" "}
        <SC.AvaThumb>
          <img src={kimAva} alt="kimAva" />
        </SC.AvaThumb>
        <div>
          <SC.Content>
            <SC.Login>Anna Kim</SC.Login> left the group <SC.Club>Chess Club</SC.Club>
          </SC.Content>
          <SC.Time>2 weeks ago</SC.Time>
        </div>
      </SC.FooterItem>
    </SC.FooterListStyled>
  );
};

export default FooterList;
