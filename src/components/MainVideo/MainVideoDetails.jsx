import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
function MainVideoDetails(props) {
    const activeDate = new Date(props.activeDetailedVideo.timestamp).toLocaleDateString();
    return (<div className='brainflix-video__details'>
        <h2 className='brainflix-video__details-title'>{props.activeDetailedVideo.title}</h2>
        <div className='brainflix-video__details-info'>
            <div className='brainflix-video__details-publisher'>
                <p className='brainflix-video__details-channel'>By {props.activeDetailedVideo.channel}</p>
                <p className='brainflix-video__details-date'>{activeDate}</p>
            </div>
            {/* Likes and Views */}
            <div className='brainflix-video__details-stats'>
                <p className='brainflix-video__details-views'><img src={viewsIcon} alt='Views Icon' />{props.activeDetailedVideo.views}</p>
                <p className='brainflix-video__details-likes'><img src={likesIcon} alt='Likes Icon' />{props.activeDetailedVideo.likes}</p>
            </div>
        </div>
        {/* Description of Video */}
        <p className='brainflix-video__details-description'>{props.activeDetailedVideo.description}</p>
    </div>
    )
}
export default MainVideoDetails