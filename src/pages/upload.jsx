import uploadImage from '../assets/images/Upload-video-preview.jpg'
import './upload.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Upload() {
    const navigate = useNavigate();
    function handleFormSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:5000/videos', {
            title: event.target.title.value,
            description: event.target.description.value
        });
        navigate('/')
        console.log(event.target.title.value);
        console.log(event.target.description.value);

    }
    return (<div className='upload-page'>
        <h2 className='upload-page__title'>Upload Video</h2>
        <form id='videoUpload' onSubmit={handleFormSubmit}>
            <div className='upload-page__desktop'>
                <div className='upload-page__thumbnail'>
                    <p className='upload-page__thumbnail-title'>VIDEO THUMBNAIL</p>
                    <img className='upload-page__thumbnail-img' src={uploadImage} alt="Blue bicycle handles" />
                </div>

                <div className='video-inputs'>

                    <div className='video-inputs__title'>
                        <p className='video-inputs__title-text'>TITLE YOUR VIDEO</p>
                        <textarea placeholder='Add a title to your video' className='video-inputs__title-area' name='title'></textarea>
                    </div>
                    <div className='video-inputs__description'>
                        <p className='video-inputs__description-text'>ADD A VIDEO DESCRIPTION</p>
                        <textarea placeholder='Add a description to your video' className='video-inputs__description-area' name='description'></textarea>
                    </div>

                </div>
            </div>
            <div className='video-button'>
                <button type='submit' className='video-button__publish'>PUBLISH</button >
                <p className='video-button__cancel'>CANCEL</p>
            </div>
        </form >
    </div >
    )
}

export default Upload