// Importing Assets
import { useState } from 'react';
import imageMohan from '../../assets/images/Mohan-muruge.jpg'
import detailedVideoData from '../../data/video-details.json'
import MainVideo from '../MainVideo/MainVideo';
import CommentSubmit from '../CommentSubmit/CommentSubmit';
import CommentsFeedback from '../CommentsFeedback/CommentsFeedback';
import NextVideo from '../NextVideo/NextVideo';
import MainVideoDetails from '../MainVideo/MainVideoDetails'
// useState on Video-details.Json
function Home() {
    const [activeDetailedVideo, setActiveDetailedVideo] = useState(detailedVideoData[1])
    const activeComment = activeDetailedVideo.comments;
    return (<>
        <MainVideo activeDetailedVideo={activeDetailedVideo} />
        <div className='brainflix-desktop'>
            <div className='brainflix-desktop__container'>
                <MainVideoDetails activeDetailedVideo={activeDetailedVideo} />
                <CommentSubmit imageMohan={imageMohan} activeDetailedVideo={activeDetailedVideo} />
                <CommentsFeedback imageMohan={imageMohan} activeComment={activeComment} />
            </div>
            <NextVideo detailedVideoData={detailedVideoData} setActiveDetailedVideo={setActiveDetailedVideo} activeDetailedVideo={activeDetailedVideo} />
        </div>
    </>
    );
}
export default Home;