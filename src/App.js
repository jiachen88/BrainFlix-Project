// Importing Assets
import { useState } from 'react';
import '../src/App.scss'
import logo from './assets/images/logo/BrainFlix-logo.svg';
import imageMohan from './assets/images/Mohan-muruge.jpg'
import videoData from './data/videos.json'
import detailedVideoData from './data/video-details.json'
import viewsIcon from './assets/images/icons/views.svg'
import likesIcon from './assets/images/icons/likes.svg'

// useState on Video.Json, and Video-details.Json
function App() {
  const [activeDetailedVideo, setActiveDetailedVideo] = useState(detailedVideoData[3])
  const [activeVideo, setActiveVideo] = useState(videoData[3]);
  const activeDate = new Date(activeDetailedVideo.timestamp).toLocaleDateString();
  const activeComment = activeDetailedVideo.comments;
  const activeCommentDate = new Date(activeDetailedVideo.comments.timestamp).toLocaleDateString();
  console.log(activeComment)
  // Handle CLick for active video
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
      <main className='brainflix-video'>
        <video className='brainflix-video__content' controls poster={activeVideo.image}></video>
        {/* Channel name, title, likes, and views */}
        <div className='brainflix-video__details'>
          <h2 className='brainflix-video__details-title'>{activeVideo.title}</h2>
          <div className='brainflix-video__details-info'>
            <div className='brainflix-video__details-publisher'>
              <p className='brainflix-video__details-channel'>By {activeVideo.channel}</p>
              <p className='brainflix-video__details-date'>{activeDate}</p>
            </div>
            {/* Likes and Views */}
            <div className='brainflix-video__details-stats'>
              <p className='brainflix-video__details-views'><img src={viewsIcon} alt='Views Icon' />{activeDetailedVideo.views}</p>
              <p className='brainflix-video__details-likes'><img src={likesIcon} alt='Likes Icon' />{activeDetailedVideo.likes}</p>
            </div>
          </div>
          {/* Description of Video */}
          <p>{activeDetailedVideo.description}</p>

        </div>
      </main>
      {/* Comments Section for Active Video */}
      <section className='brainflix-comments'>
        {/* Number of Comments */}
        <h2 className='brainflix-comments__counter'>{activeDetailedVideo.comments.length} Comments</h2>
        {/* Large Comments Container */}
        <div className='brainflix-comments__container'>
          <img className='brainflix-comments__mohan' src={imageMohan} alt='Mohan Logo' />
          {/* Medium Comments Container */}
          <div className='brainflix-comments__container-medium'>
            {/* Small Comments Container */}
            <div className='brainflix-comments__container-small'>
              {/* Text Area */}
              <p className='brainflix-comments__title'>JOIN THE CONVERSATION</p>
              <textarea className='brainflix-comments__text' placeholder='Add a New comment'></textarea>
            </div>
            {/* Comment Submit Button */}
            <button className='brainflix-comments__button'>COMMENT</button>
          </div>
        </div>
      </section>


      {activeComment.map((data, id) => {
        return <div key={id}>
          <img src={imageMohan} alt='Mohan'></img>
          <div>
            <div>
              <h2>{data.name}</h2>
              <p>{activeCommentDate}</p>
            </div>
            <p>{data.comment}</p>
          </div>
        </div>
      })}
    </div >
  );
}

export default App;
