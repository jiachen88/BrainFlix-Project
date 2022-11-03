// Importing Assets
import { useState } from 'react';
import '../src/App.scss'
import imageMohan from './assets/images/Mohan-muruge.jpg'
import detailedVideoData from './data/video-details.json'
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import CommentSubmit from './components/CommentSubmit/CommentSubmit';
import CommentsFeedback from './components/CommentsFeedback/CommentsFeedback';
import NextVideo from './components/NextVideo/NextVideo';

// useState on Video.Json, and Video-details.Json
function App() {
  const [activeDetailedVideo, setActiveDetailedVideo] = useState(detailedVideoData[1])
  const activeComment = activeDetailedVideo.comments;
  // Handle CLick for active video
  const handleVideoClick = (id) => {
    const foundVideo = detailedVideoData.find(videoObject => videoObject.id === id);
    setActiveDetailedVideo(foundVideo);
  }

  return (
    <div>
      {/* brainflix header wrapper */}
      <Header imageMohan={imageMohan} />
      {/* Video Section */}
      <MainVideo activeDetailedVideo={activeDetailedVideo} />
      {/* Comments Submit Section for Active Video */}
      <CommentSubmit imageMohan={imageMohan} activeDetailedVideo={activeDetailedVideo} />
      {/* Comments for Video */}
      <CommentsFeedback imageMohan={imageMohan} activeComment={activeComment} />
      {/* Next Reccomended Videos */}
      <NextVideo detailedVideoData={detailedVideoData} setActiveDetailedVideo={setActiveDetailedVideo} activeDetailedVideo={activeDetailedVideo} />
    </div >
  );
}

export default App;
