import './CommentSubmit.scss'

function CommentSubmit(props) {
    return (<section className='brainflix-comments'>
        {/* Number of Comments */}
        <h2 className='brainflix-comments__counter'>{props.activeComment?.length} Comments</h2>

        <div className='brainflix-comments__container'>
            <img className='brainflix-comments__mohan' src={props.imageMohan} alt='Mohan Logo' />
            <div className='brainflix-comments__container-large'>
                <div className='brainflix-comments__container-medium'>
                    <div className='brainflix-comments__container-small'>
                        {/* Text Area */}
                        <p className='brainflix-comments__title'>JOIN THE CONVERSATION</p>
                        <textarea className='brainflix-comments__text' placeholder='Add a New comment'></textarea>
                    </div>
                    {/* Comment Submit Button */}
                    <button className='brainflix-comments__button'>COMMENT</button>
                </div>
            </div>
        </div>
    </section>)
}
export default CommentSubmit