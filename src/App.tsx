import * as SC from "./AppStyled";
import EventList from "./components/EventList/EventList";
import Header from "./components/Header/Header";


const App: React.FC = () => {
  return (
    <SC.AppCon>
      <Header/>
      <EventList/>
    </SC.AppCon>
  );
};

export default App;
