let VideoComments = (props) => {

  let comments = props.videoComments.map(comment => {
    return (
      <div key={comment.id} className="video-comment">
        <p><img className="comment-picture" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
        <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
      </div>
    );
  });
  
  return (
    <div className="video-commentsThread">
      {comments}
    </div>
  );
};

export default VideoComments;
