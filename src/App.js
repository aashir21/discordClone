
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Download from './components/Download';
import Nitro from './components/Nitro';
import Discover from './components/Discover';
import SafetyCenter from './components/SafetyCenter';
import Disclaimer from './components/Disclaimer';
import DisclaimerPage from './components/DisclaimerPage';


function App() {
  return (
    <div className="App">
      <>

        <Disclaimer></Disclaimer> 
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/download' element={<Download></Download>}></Route>
          <Route exact path='/nitro' element={<Nitro></Nitro>}></Route>
          <Route exact path='/discover' element={<Discover></Discover>}></Route>
          <Route exact path='/safetycenter' element={<SafetyCenter></SafetyCenter>}></Route>
          <Route exact path='/disclaimer' element={<DisclaimerPage></DisclaimerPage>}></Route>
        </Routes>

        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
