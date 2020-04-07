import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';


//convert app to class component with a constructor and super
//set initial state = video object
//on click event -> change initial state
//pass current state and on click event to props, video list and video player
// VideoList state={this.state} event=onClick
// VideoListEntry onClick={props.event}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      playing: exampleVideoData[3]
    };
    this.onClick = this.onClick.bind(this);
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
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing} />
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} event={this.onClick} state={this.state}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
