import VideoList from "./VideoList.js";
import VideoDetails from "./VideoDetails.js";
import VideoPlayer from "./VideoPlayer.js";
import VideoComments from "./VideoComments.js";
import Search from "./Search.js";

import { getVideoDetails, getComments } from "../lib/searchYouTube.js";
import exampleVideoData from "../data/exampleVideoData.js";
import YOUTUBE_API_KEY from "../config/youtube.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      videos: [],
      details: {},
      comments: [],
    };
  }

  componentDidMount() {
    let options = {
      query: 'Gordon Ramsay',
      max: 10,
      key: YOUTUBE_API_KEY
    };

    // fetch data
    this.props.searchYouTube(options, (data) => {
      // fetch video tails
      getVideoDetails(data[0].id.videoId, (data) => {
        this.setState({ details: data.items[0] });
      });

      getComments(data[0].id.videoId, (data) => {
        this.setState({ comments: data.items });
      });
      
      this.setState({
        videos: data,
        current: data[0]
      });
    });
  }

  clickHandler(id) {
    this.setState(prevState => {
      let currentVideo = prevState.videos.filter(video => {
        return video.id.videoId === id;
      })[0];

      getVideoDetails(currentVideo.id.videoId, (data) => {
        console.log(data);
        this.setState({ details: data.items[0] });
      });

      getComments(currentVideo.id.videoId, (data) => {
        console.log(data);
        this.setState({ comments: data.items });
      });

      return { current: currentVideo };
    });

  }

  keyHandler(query) {
    let options = {
      query,
      max: 10,
      key: YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <img src='../../img/recastlyLOGO.png' className="logo"/>
          <div className="col-md-6 offset-md-3">
            <Search keyHandler={this.keyHandler.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current} />
            <VideoDetails xferDetails={this.state.details}/>
            <VideoComments videoComments={this.state.comments}/>
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
