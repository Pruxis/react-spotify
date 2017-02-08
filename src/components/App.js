import React, { Component } from 'react';
import Header from './Header';
import Library from './Library';
import Playlist from './Playlist';

class App extends Component {

  state = {
    tracks: {}
  };

  addTrack = (track) => {
    // Get a copy of our current state
    const tracks = { ...this.state.tracks };
    // Add in the new track
    const timestamp = Date.now();
    tracks[`track-${timestamp}`] = track;
    // Setting the state.
    this.setState({ tracks });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <Library addTrack={this.addTrack} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <Playlist />
          </div>

        </div>

      </div>
    )
  }
}

export default App;
