import './NextVideo.scss'
function NextVideo(props) {
    const handleVideoClick = (id) => {
        const foundVideo = props.detailedVideoData.find(videoObject => videoObject.id === id);
        props.setActiveDetailedVideo(foundVideo);
    }
    return (<aside className='brainflix-next' >
        <h2 className='brainflix-next__title'>NEXT VIDEOS</h2>
        {props.detailedVideoData.filter(video => video.id !== props.activeDetailedVideo.id).map((data, id) => {
            return <div key={id} className='brainflix-next__container'>
                <img onClick={() => handleVideoClick(data.id)} key={data.id} className='brainflix-next__video' src={data.image} alt='Next Video preview' />
                <div className='brainflix-next__container-small'>
                    <h2 className='brainflix-next__video-title'>{data.title}</h2>
                    <p className='brainflix-next__video-channel'>{data.channel}</p>
                </div>
            </div>
        })}
    </aside>)
}
export default NextVideo