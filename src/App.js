import { useState } from 'react';
import '../src/App.scss'
import logo from './assets/images/logo/BrainFlix-logo.svg';
import imageMohan from './assets/images/Mohan-muruge.jpg'
import videoData from './data/videos.json'
import detailedVideoData from './data/video-details.json'
import viewsIcon from './assets/images/icons/views.svg'
import likesIcon from './assets/images/icons/likes.svg'


function App() {
  const [activeDetailedVideo, setActiveDetailedVideo] = useState(detailedVideoData[0])
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
          {/* Search Button Wrapped With Mohan Image */}
        </div>
        <button className='brainflix-header__button'>UPLOAD</button>
        <img className='brainflix-header__mohan-tablet' src={imageMohan} alt='Mohan profile' />
      </header >
      {/* Video Section */}
      <section className='brainflix-video'>
        <video className='brainflix-video__content' controls poster={activeVideo.image}></video>
        {/* Channel name, title, likes, and views */}
        <div className='brainflix-video__details'>
          <h2 className='brainflix-video__details-title'>{activeVideo.title}</h2>
          <div className='brainflix-video__details-info'>
            <div className='brainflix-video__details-publisher'>
              <p>By {activeVideo.channel}</p>
              <p>{activeDetailedVideo.timestamp}</p>
            </div>
            <div className='brainflix-video__details-stats'>
              <p><img src={viewsIcon} alt='Views Icon' />{activeDetailedVideo.views}</p>
              <p><img src={likesIcon} alt='Likes Icon' />{activeDetailedVideo.likes}</p>
            </div>
          </div>
          <p>{activeDetailedVideo.description}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
