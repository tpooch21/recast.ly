import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';

//convert app to class component with a constructor and super
//set initial state = video object
//on click event -> change initial state
//pass current state and on click event to props, video list and video player
// VideoList state={this.state} event=onClick
// VideoListEntry onClick={props.event}

// Initial state should be empty object
// Add searchYouTube to body of App
//   Pass in our object and success CB to searchYoutube
//   Create options property in App state equal to search object
//   Success CB will add results.items to this.props
//   setState to this.props[0]
//   setState source to this.props
//
// componentDidMount() method will call searchYoutube
//   Input will be this.state.options
//   And successCB


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      source: exampleVideoData,
      playing: null,
    };

    this.options = {
      query: 'tigers',
      max: 5,
      key: YOUTUBE_API_KEY
    };

    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  // Makes request to API and updates VideoList and VideoPlayer on keyboard entries
  onKeyPress(keyword) {

    this.options.query = keyword;

    // var debouncer = _.debounce(function() {
    //     searchYouTube(this.options, (data) => {
    //       this.setState({
    //         source: data.items,
    //         playing: data.items[0],
    //       });
    //     });
    // }, 750);

    // debouncer();
    searchYouTube(this.options, (data) => {
      this.setState({
        source: data.items,
        playing: data.items[0],
      });
    });
  }

  // Makes request to API and updates VideoList and VideoPlayer when search button is clicked
  onSubmit(keyword) {

    this.options.query = keyword;

    searchYouTube(this.options, (data) => {
      this.setState({
        source: data.items,
        playing: data.items[0],
      });
    });
  }

  onClick(video) {
    this.setState({
      playing: video
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSubmit={this.onSubmit} keyUp={this.onKeyPress} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing || this.state.source[0]} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.source} event={this.onClick} state={this.state}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {

    // Call GET request function and update state of App with results
    searchYouTube(this.options, (data) => {
      this.setState({
        source: data.items,
        playing: this.state.playing || data.items[0],
      });
    });
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
