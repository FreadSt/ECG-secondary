import './App.scss';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from './pages/mainpage/MainPage';
import NavBar from './components/navbar/NavBar';
import PublicRelations from './pages/publicRelations/PublicRelations';
import Privacy from "./components/privacy/Privacy"
import Marketing from './pages/marketing/Marketing';
import BrandDev from './pages/brandDevelop/BrandDev';
import WebMarketing from './pages/webMarketing/WebMarketing';
import AppDev from './pages/appDevelopment/AppDev';
import MobNav from './components/mobilenav/MobNav';
import { useState,useEffect } from 'react';
import preloaderSmile from "./assets/images/body-img/rotatingSmile.png";
import vector from "./assets/images/body-img/Vector.png";
import { InfoBox } from './components/navbar/outsideClick/OutClick';
import NotFound from './NotFound';

/*
const loader = document.querySelector(".preload-title");

const showLoader = () => loader.classList.remove("preload-title");
const addClass = () => loader.classList.add("loader-hide");
useEffect(() => {
    showLoader();
    addClass();
  }, []);
*/

const App = () => {
  const [showInfo1, setShowInfo1] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Router >
      {loading ?<div className='preloader'>
                <img className='rotate-img' src={preloaderSmile}/>
                <img className='rotate-text' src={vector}/>
              </div>:
        <ScrollToTop>
        <div className='App'>
          <div className='navbar'>
            <NavBar onClick={() => {setShowInfo1(false)}}/>
            <InfoBox props={showInfo1} onClickOutside={()=> {setShowInfo1(true)}}/>
          </div>
          <div className='mobile-nav'>
            <MobNav/>
          </div>
            <Routes>
            <Route exact path='/' element={<MainPage/>}/>
            <Route path='/publicrelations' element={<PublicRelations/>}/>
            <Route path='/marketing' element={<Marketing/>}/>
            <Route path='/brand' element={<BrandDev/>}/>
            <Route path='/webmarketing' element={<WebMarketing/>}/>
            <Route path='/appdev' element={<AppDev/>}/>
            <Route component={NotFound} />
          </Routes>
          <Privacy/>
        </div>
        </ScrollToTop>
      }
    </Router>

  );
}

export default App;
