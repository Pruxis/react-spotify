import React, { Component } from 'react';
import Track from './Track';
import got from 'got';

class Library extends Component {

  searchTracks = (e) => {
    this.searchSpotify();
  }

  // Search on Spotify and populate the state with the found tracks.
  searchSpotify = () => {
    got(`https://api.spotify.com/v1/search?query=${this.searchInput.value}&limit=5&type=track`)
        .then(response => {
            this.setState({
              tracks: JSON.parse(response.body).tracks.items
            })
        })
        .catch(error => {
            console.log(error.response);
        });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <h4>Step 1: Search for tracks</h4>
          <input onKeyUp={(e) => this.searchTracks(e)}
          ref={(input) => {this.searchInput = input}}
          type="text" 
          className="form-control" 
          placeholder="Search Music.." />
          {
                Object.keys(this.state.tracks)
                .map(key => <Track key={key} track={this.state.tracks[key]}/>)
          }
          
        </div>
      </div>
    );
  }

  state = {
    tracks: {}
  }
}

export default Library;
