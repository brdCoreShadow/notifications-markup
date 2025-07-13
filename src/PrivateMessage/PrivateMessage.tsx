import * as SC from "./PrivateMessageStyled"

import hasaAva from "../assets/images/avatar-rizky-hasanuddin.webp"

const PrivateMessage: React.FC = () => {
  return (
    <SC.PrivateMessageCon>
      <SC.FlexCon>
        <SC.AvaThumb>
          <img src={hasaAva} alt="hasa_ava" />
        </SC.AvaThumb>
        <div>
          <p>
            <span>Rizky Hasanuddin</span>
            sent you a private message
          </p>
          <p>5 days ago</p>
        </div>
      </SC.FlexCon>
      <SC.MsgWrapper>
      <SC.MsgCon>
        <p>
          Hello, thanks for setting up the Chess Club. I’ve been a member for a
          few weeks now and I’m already having lots of fun and improving my
          game.
        </p>
      </SC.MsgCon>
      </SC.MsgWrapper>
    </SC.PrivateMessageCon>
  );
};

export default PrivateMessage;
