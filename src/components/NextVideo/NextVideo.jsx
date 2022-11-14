import './NextVideo.scss'
import { Link } from 'react-router-dom';
function NextVideo(props) {

    return (<aside className='brainflix-next' >
        <h2 className='brainflix-next__title'>NEXT VIDEOS</h2>
        {props.videos.filter(video => video.id !== props.selectedVideo.id).map((data, id) => {
            return <div key={id} className='brainflix-next__container'>
                <Link to={`/videos/${data.id}`}> <img className='brainflix-next__video' src={data.image} alt='Next Video preview' /></Link>
                <div className='brainflix-next__container-small'>
                    <h2 className='brainflix-next__video-title'>{data.title}</h2>
                    <p className='brainflix-next__video-channel'>{data.channel}</p>
                </div>
            </div>

        })}
    </aside>)
}
export default NextVideo