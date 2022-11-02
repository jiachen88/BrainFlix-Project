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
  const [activeDetailedVideo, setActiveDetailedVideo] = useState(detailedVideoData[1])
  // const [activeVideo, setActiveVideo] = useState(videoData[1]);
  const activeDate = new Date(activeDetailedVideo.timestamp).toLocaleDateString();
  const activeComment = activeDetailedVideo.comments;
  const activeCommentDate = new Date(activeComment.timestamp).toLocaleDateString()
  console.log(activeCommentDate)
  // Handle CLick for active video
  const handleVideoClick = (id) => {
    const foundVideo = detailedVideoData.find(videoObject => videoObject.id === id);
    setActiveDetailedVideo(foundVideo);
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
        <video className='brainflix-video__content' controls poster={activeDetailedVideo.image}></video>
        {/* Channel name, title, likes, and views */}
        <div className='brainflix-video__details'>
          <h2 className='brainflix-video__details-title'>{activeDetailedVideo.title}</h2>
          <div className='brainflix-video__details-info'>
            <div className='brainflix-video__details-publisher'>
              <p className='brainflix-video__details-channel'>By {activeDetailedVideo.channel}</p>
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
      <article className='brainflix-feedback'>
        {activeComment.map((data, id) => {
          return <div className='brainflix-feedback__container' key={id}>
            <img className='brainflix-feedback__mohan' src={imageMohan} alt='Mohan'></img>
            <div className='brainflix-feedback__container-medium'>
              <div className='brainflix-feedback__container-small'>
                <h2 className='brainflix-feedback__name'>{data.name}</h2>
                <p className='brainflix-feedback__date'>{activeCommentDate}</p>
              </div>
              <p className='brainflix-feedback__comment'>{data.comment}</p>
            </div>
          </div>
        })}
      </article>
      <aside className='brainflix-next' >
        <h2 className='brainflix-next__title'>NEXT VIDEOS</h2>
        {detailedVideoData.filter(video => video.id !== activeDetailedVideo.id).map((data, id) => {
          return <div key={id} className='brainflix-next__container'>
            <img onClick={() => handleVideoClick(data.id)} key={data.id} className='brainflix-next__video' src={data.image} alt='Next Video preview' />
            <div className='brainflix-next__container-small'>
              <h2 className='brainflix-next__video-title'>{data.title}</h2>
              <p className='brainflix-next__video-channel'>{data.channel}</p>
            </div>
          </div>
        })}
      </aside>
    </div >
  );
}

export default App;
