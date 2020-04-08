// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import VideoList from './components/VideoList.js';
import VideoListEntry from './components/VideoList.js';
import VideoPlayer from './components/VideoPlayer.js';
import exampleVideoData from './data/exampleVideoData.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(
  <App searchYouTube={searchYouTube}/>,
  document.getElementById('app')
);