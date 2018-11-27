import VideoList from "./VideoList.js";
import exampleVideoData from "../data/exampleVideoData.js";
import VideoPlayer from "./VideoPlayer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  clickHandler(id) {
    this.setState(prevState => {
      let currentVideo = prevState.videos.filter(video => {
        return video.id.videoId === id;
      })[0];

      return {
        current: currentVideo
      };
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current} />
          </div>
          <div className="col-md-5">
            <VideoList changeVideo={this.clickHandler.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
