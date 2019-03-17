import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onInputSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onInputSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
