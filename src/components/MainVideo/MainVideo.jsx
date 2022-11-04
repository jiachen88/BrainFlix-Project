
import './MainVideo.scss'



function MainVideo(props) {
    return (<main className='brainflix-video' >
        <video className='brainflix-video__content' controls poster={props.activeDetailedVideo.image}></video>
        {/* Channel name, title, likes, and views */}
    </main >)
}
export default MainVideo