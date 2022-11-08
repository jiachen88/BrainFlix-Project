import uploadImage from '../assets/images/Upload-video-preview.jpg'
function Upload() {
    return (<div>
        <h2>Upload Video</h2>
        <div>
            <p>VIDEO THUMBNAIL</p>
            <img src={uploadImage} alt="Blue bicycle handles" />
        </div>
    </div>
    )
}
export default Upload