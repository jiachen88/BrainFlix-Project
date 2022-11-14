import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
import './MainVideo.scss'
function MainVideoDetails(props) {
    const activeDate = new Date(props.selectedVideo.timestamp).toLocaleDateString();
    return (<div className='brainflix-video__details'>
        <h2 className='brainflix-video__details-title'>{props.selectedVideo.title}</h2>
        <div className='brainflix-video__details-info'>
            <div className='brainflix-video__details-publisher'>
                <p className='brainflix-video__details-channel'>By {props.selectedVideo.channel}</p>
                <p className='brainflix-video__details-date'>{activeDate}</p>
            </div>
            {/* Likes and Views */}
            <div className='brainflix-video__details-stats'>
                <p className='brainflix-video__details-views'><img src={viewsIcon} alt='Views Icon' />{props.selectedVideo.views}</p>
                <p className='brainflix-video__details-likes'><img src={likesIcon} alt='Likes Icon' />{props.selectedVideo.likes}</p>
            </div>
        </div>
        {/* Description of Video */}
        <p className='brainflix-video__details-description'>{props.selectedVideo.description}</p>
    </div>
    )
}
export default MainVideoDetails