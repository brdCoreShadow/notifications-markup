import * as SC from "./HeaderStyled"

const Header:React.FC = () => {
    return ( 
         <SC.Header>
                <SC.LogoCon>
                  <h1>Notifications</h1>
                  <SC.LogoBox>
                    <span>3</span>
                  </SC.LogoBox>
                </SC.LogoCon>
                <SC.HeaderBtn type="button">Mark all as read</SC.HeaderBtn>
              </SC.Header>
     );
}
 
export default Header;