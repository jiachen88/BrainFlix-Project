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
    const { id } = useParams();
    const activeComment = selectedVideo.comments;
    console.log(selectedVideo)
    useEffect(() => {
        console.log('id changed', id);
        let videoId = id || videos[0]?.id
        if (videoId) {
            axios
                .get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=fe2c0b72-9d10-4008-b88e-be73ce70ab6e`)
                .then((response) => {
                    console.log(response);
                    setSelectedVideo(response.data)
                })
                .catch((error) => console.log(error))
        }
    }, [id, videos]);

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
            <NextVideo videos={videos} setSelectedVideo={setSelectedVideo} selectedVideo={selectedVideo} />
        </div>
    </>
    );
}
export default Home;