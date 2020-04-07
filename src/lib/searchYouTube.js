// Ajax request
// GET request
// set path to Youtube data API url
// define data property
//   key
//   part
//   query
//   max
//   embeddedVideo
// success will be set to our input callback
// error - will log message if server is unsuccessful
import YOUTUBE_API_KEY from '../config/youtube.js';

var ytOptions = {
  query: 'tigers',
  max: 5,
  key: YOUTUBE_API_KEY
};

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: callback,
    error: function(response) {
      console.log('request failed');
    }
  });
};

export default searchYouTube;


