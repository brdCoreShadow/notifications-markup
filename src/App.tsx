import * as SC from "./AppStyled";
import EventList from "./components/EventList/EventList";
import FooterList from "./components/FooterList/FooterList";
import Header from "./components/Header/Header";
import PrivateMessage from "./PrivateMessage/PrivateMessage";


const App: React.FC = () => {
  return (
    <SC.AppCon>
      <Header/>
      <EventList/>
      <PrivateMessage/>
      <FooterList/>
    </SC.AppCon>
  );
};

export default App;
