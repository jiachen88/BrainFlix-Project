import uploadImage from '../assets/images/Upload-video-preview.jpg'
import './upload.scss'
function Upload() {
    return (<div className='upload-page'>
        <h2 className='upload-page__title'>Upload Video</h2>
        <div className='upload-page__thumbnail'>
            <p className='upload-page__thumbnail-title'>VIDEO THUMBNAIL</p>
            <img className='upload-page__thumbnail-img' src={uploadImage} alt="Blue bicycle handles" />
        </div>
        <div>
            <div>
                <p>TITLE YOUR VIDEO</p>
                <textarea></textarea>
            </div>
            <div>
                <p>ADD A VIDEO DESCRIPTION</p>
                <textarea></textarea>
            </div>
        </div>
        <div>
            <p>CANCEL</p>
            <button>PUBLISH</button>
        </div>
    </div>
    )
}
export default Upload