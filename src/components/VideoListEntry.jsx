// one video component
//picture to the left
//title in the middle
//description below title


//example video data -> Video list -> Video list entry


//input is going to be object that can be accessed through prop.video
//props = snipet property of each video object
// image = props.video.thumbnails.default.url
// title = props.video.title
// description = props.video.description

// Might be able to pass props.video as an argument

var VideoListEntry = (props) => {

  var clickEvent = (event) => {
    props.onClick(props.video);
  };

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={clickEvent}>{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );

};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly definedx
export default VideoListEntry;
