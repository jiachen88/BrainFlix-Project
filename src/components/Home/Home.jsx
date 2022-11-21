// Importing Assets
import { useState, useEffect } from 'react';
import imageMohan from '../../assets/images/Mohan-muruge.jpg'
import MainVideo from '../MainVideo/MainVideo';
import CommentSubmit from '../CommentSubmit/CommentSubmit';
import CommentsFeedback from '../CommentsFeedback/CommentsFeedback';
import NextVideo from '../NextVideo/NextVideo';
import MainVideoDetails from '../MainVideo/MainVideoDetails'
import axios from 'axios';
import { useParams, } from 'react-router-dom';
// useState on Video-details.Json
function Home() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState([null]);
    const params = useParams();
    const activeComment = selectedVideo.comments;
    console.log(selectedVideo)
    useEffect(() => {
        console.log('params changed', params);
        if (params.videoId) {
            axios
                // replace herokuapp with localhost
                .get(`http://localhost:5000/videos/${params.videoId}`)
                .then((response) => {
                    console.log(response);
                    setSelectedVideo(response.data)
                })
                .catch((error) => console.log(error))
        }
    }, [params]);

    useEffect(() => {
        console.log('Videos Mounted');
        axios
            .get(`http://localhost:5000/videos`)
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
            <NextVideo videos={videos} setSelectedVideo={setSelectedVideo} selectedVideo={selectedVideo} />
        </div>
    </>
    );
}
export default Home;