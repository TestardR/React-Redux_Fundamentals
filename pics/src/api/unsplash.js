import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 28aeda8703ec1c85f8a539c464cc26b613f73bf86d4383543c1c0ebad4849f70'
  }
});
