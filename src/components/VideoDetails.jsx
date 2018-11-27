const VideoDetails = (props) => {
  // if empty, return empty div
  if (props.xferDetails.statistics === undefined) {
    return (<div></div>);
  }

  return (
    <div className="video-details">
      <p>VIEWS:{props.xferDetails.statistics.viewCount}</p>
      <p>LIKES:{props.xferDetails.statistics.likeCount}</p>
      <p>DISLIKES:{props.xferDetails.statistics.dislikeCount}</p>
      <p>FAVORITES:{props.xferDetails.statistics.favoriteCount}</p>
      <p>COMMENTCOUNTS:{props.xferDetails.statistics.commentCount}</p>
    </div>
  );
};


export default VideoDetails;