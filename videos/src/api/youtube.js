import axios from 'axios';

const KEY = 'AIzaSyA7FKQ0X1JYqusKd9J3zxL9gDiGg52OJm4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
