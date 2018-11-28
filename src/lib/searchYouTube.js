import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    q: options.query,
    type: 'video',
    maxResults: options.max,
    key: options.key
  }, (data) => {
    callback(data.items);
  });
};

const getVideoDetails = (id, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/videos', {
    part: 'snippet,contentDetails,statistics',
    id,
    key: YOUTUBE_API_KEY,
  }, callback);
};

const getComments = (id, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/commentThreads', {
    videoId: id,
    part: 'snippet, replies',
    key: YOUTUBE_API_KEY
  }, callback);
};

const debouncedSearchYouTube = _.debounce(searchYouTube, 500);
export { searchYouTube as default, debouncedSearchYouTube, getVideoDetails, getComments };
