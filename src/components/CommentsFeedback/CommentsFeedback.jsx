import './CommentsFeedback.scss'
function CommentsFeedback(props) {
    return (<article className='brainflix-feedback'>
        {props.activeComment?.map((data, id) => {
            return <div className='brainflix-feedback__container' key={id}>
                <img className='brainflix-feedback__mohan' src={props.imageMohan} alt='Mohan'></img>
                <div className='brainflix-feedback__container-medium'>
                    <div className='brainflix-feedback__container-small'>
                        <h2 className='brainflix-feedback__name'>{data.name}</h2>
                        <p className='brainflix-feedback__date'>{new Date(data.timestamp).toLocaleDateString()}</p>
                    </div>
                    <p className='brainflix-feedback__comment'>{data.comment}</p>
                </div>
            </div>
        })}
    </article>)
}
export default CommentsFeedback