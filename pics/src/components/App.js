import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
  onSearchSubmit = term => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 28aeda8703ec1c85f8a539c464cc26b613f73bf86d4383543c1c0ebad4849f70'
      }
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
