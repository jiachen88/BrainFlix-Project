// Importing Assets
import { useState, useEffect } from 'react';
import imageMohan from '../../assets/images/Mohan-muruge.jpg'
import detailedVideoData from '../../data/video-details.json'
import MainVideo from '../MainVideo/MainVideo';
import CommentSubmit from '../CommentSubmit/CommentSubmit';
import CommentsFeedback from '../CommentsFeedback/CommentsFeedback';
import NextVideo from '../NextVideo/NextVideo';
import MainVideoDetails from '../MainVideo/MainVideoDetails'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
// useState on Video-details.Json
function Home() {
    const [videos, setVideos] = useState([]);
    const [activeDetailedVideo, setActiveDetailedVideo] = useState(detailedVideoData[0])
    const [selectedVideo, setSelectedVideo] = useState([]);
    const params = useParams();
    const activeComment = selectedVideo.comments;
    console.log(selectedVideo)
    useEffect(() => {
        console.log('params changed', params);
        if (params.videoId) {
            axios
                .get(`https://project-2-api.herokuapp.com/videos/${params.videoId}?api_key=fe2c0b72-9d10-4008-b88e-be73ce70ab6e`)
                .then((response) => {
                    console.log(response);
                    setSelectedVideo(response.data)
                    console.log(selectedVideo)
                })
                .catch((error) => console.log(error))
        }
    }, [params]);

    useEffect(() => {
        console.log('Videos Mounted');
        axios
            .get(`https://project-2-api.herokuapp.com/videos/?api_key=fe2c0b72-9d10-4008-b88e-be73ce70ab6e`)
            .then((response) => {
                console.log(response);
                setVideos(response.data)
            })
            .catch((error) => console.log(error));
    }, []);

    return (<>
        <MainVideo selectedVideo={selectedVideo} />
        <div className='brainflix-desktop'>
            <div className='brainflix-desktop__container'>
                <MainVideoDetails selectedVideo={selectedVideo} />
                <CommentSubmit imageMohan={imageMohan} activeComment={activeComment} />
                <CommentsFeedback imageMohan={imageMohan} activeComment={activeComment} />
            </div>
            <NextVideo videos={videos} setSelectedVideo={setSelectedVideo} />
        </div>
    </>
    );
}
export default Home;