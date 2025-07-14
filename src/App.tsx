import * as SC from "./AppStyled";
import EventList from "./components/EventList/EventList";
import FooterList from "./components/FooterList/FooterList";
import Header from "./components/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import PrivateMessage from "./PrivateMessage/PrivateMessage";

const App: React.FC = () => {
  return (
    <SC.AppCon>
      <SharedLayout>
        <Header />
        <EventList />
        <PrivateMessage />
        <FooterList />
      </SharedLayout>
    </SC.AppCon>
  );
};

export default App;
