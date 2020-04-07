//list of thumbnail videos with title and discriptions

//in app our video list div is goint to create an instance of our video list conponent

// <VideoList videos=[] />
// VideoList --> props.videos = [];
// Loop through props.videos and create <VideoListEntry video=props.videos[0] />


//prop object

// VideoList --> props.videos = [{snippet: {}}, {snippet: {}}];
import VideoListEntry from './VideoListEntry.js';

// Pass onClick handler from App to each VideoListEntry
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video} onClick={props.event} state={props.state}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.x
export default VideoList;
