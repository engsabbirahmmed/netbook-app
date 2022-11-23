import logo from './logo.svg';
import Header from './component/Header';
import JoinNetbook from './component/Join-netbook';
import OurAchievement from './component/Our-Achievement';
import OurCommunity from './component/Our-Community';
import TeamMembers from './component/Our-Team';
import NetbookApp from './component/Netbook-app';
import './App.css';
import LatestNews from './component/Latest-news';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header/>
      <JoinNetbook/>
      <OurAchievement/>
      <OurCommunity/>
      <TeamMembers/>
      <NetbookApp/>
      <LatestNews/>
      <Footer/>
    </div>
  );
}

export default App;
