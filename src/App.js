import { useState } from 'react';
import '../src/App.scss'
import logo from './assets/images/logo/BrainFlix-logo.svg';
import imageMohan from './assets/images/Mohan-muruge.jpg'
import videoData from './data/videos.json'
import detailedVideoData from './data/video-details.json'


function App() {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);
  const handleVideoClick = (id) => {
    const foundVideo = videoData.find(videoObject => videoObject.id === id);
    setActiveVideo(foundVideo);

  }
  return (
    <div>
      {/* brainflix header wrapper */}
      <header className='brainflix-header'>
        <img className='brainflix-header__logo' src={logo} alt='logo' />
        {/* Wrapping search bar with Mohan image */}
        <div className='brainflix-header__search'>
          <form className='brainflix-header__search-form'>
            <input className='brainflix-header__search-bar' type={'text'}
              placeholder='Search' />
          </form>
          <img className='brainflix-header__mohan' src={imageMohan} alt='Mohan profile' />
        </div>
        <button className='brainflix-header__button'>UPLOAD</button>
        <img className='brainflix-header__mohan-tablet' src={imageMohan} alt='Mohan profile' />
      </header >
      <section className='brainflix-video'>
        <video className='brainflix-video__content' controls poster={activeVideo.image}></video>
        <h2>{activeVideo.title}</h2>
      </section>
    </div >
  );
}

export default App;
