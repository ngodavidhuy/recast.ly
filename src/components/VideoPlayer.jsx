var VideoPlayer = (props) => {
  // let videoId = props.video.id ? props.video.id.videoId : '';
  // let videoTitle = props.video.id ? props.video.snippet.title : '';
  // let videoDescription = props.video.id ? props.video.snippet.description : '';

  let jsx;

  if (props.video.id) {
    jsx = (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{props.video.snippet.title}</h3>
          <div>{props.video.snippet.description}</div>
        </div>
      </div>
    );
  } else {
    jsx = (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/'} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{}</h3>
          <div>{}</div>
        </div>
      </div>
    );
  }

  return (
    jsx
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
