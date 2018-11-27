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

export default searchYouTube;
