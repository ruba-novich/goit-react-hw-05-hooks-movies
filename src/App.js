import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';

import 'modern-normalize/modern-normalize.css';
import './styles.css';

class App extends Component {
  state = {
    query: '',
  };

  handelFormSubmit = value => {
    this.setState({ query: value });
  };

  render() {
    return (
      <div className="app">
        <SearchBar onSubmit={this.handelFormSubmit} />
        <ImageGallery searchQuery={this.state.query} />
      </div>
    );
  }
}

export default App;
