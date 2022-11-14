import uploadImage from '../assets/images/Upload-video-preview.jpg'
import './upload.scss'
function Upload() {
    return (<div className='upload-page'>
        <h2 className='upload-page__title'>Upload Video</h2>
        <div className='upload-page__desktop'>
            <div className='upload-page__thumbnail'>
                <p className='upload-page__thumbnail-title'>VIDEO THUMBNAIL</p>
                <img className='upload-page__thumbnail-img' src={uploadImage} alt="Blue bicycle handles" />
            </div>
            <div className='video-inputs'>
                <div className='video-inputs__title'>
                    <p className='video-inputs__title-text'>TITLE YOUR VIDEO</p>
                    <textarea placeholder='Add a title to your video' className='video-inputs__title-area'></textarea>
                </div>
                <div className='video-inputs__description'>
                    <p className='video-inputs__description-text'>ADD A VIDEO DESCRIPTION</p>
                    <textarea placeholder='Add a description to your video' className='video-inputs__description-area'></textarea>
                </div>
            </div>
        </div>
        <div className='video-button'>
            <button className='video-button__publish'>PUBLISH</button>
            <p className='video-button__cancel'>CANCEL</p>
        </div>
    </div>
    )
}
export default Upload