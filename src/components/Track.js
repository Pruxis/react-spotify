import React, { Component } from 'react';

class Track extends Component {
    render() {
        const track = this.props.track;
        return (
            <div className="help-block">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img className="img-responsive" src={track.album.images[0].url} alt="Album image" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h6>Title: {track.name}</h6>
                            <h6>{this.renderArtists(track.artists)}</h6>
                            <h6>Duration: {this.renderDuration(track.duration_ms)}</h6>
                            <button className="btn btn-primary">Add to playlist</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderArtists = (artists) => {
        // Edit the string to be valid when there are more than one artists.
        var result = artists.length > 1 ? "Artists: " : "Artist: ";
        // Iterate over artists to concatinate them into the result string
        Object.keys(artists).map(key => result += artists[key].name + " & ");
        // Removing the last ampersand.
        return result.substring(0, result.length -2);
    }

    renderDuration = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        // Returns the minutes and calculates the second to add a 0 in between or not.
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
}

Track.propTypes = {
    track: React.PropTypes.object.isRequired
}

export default Track;
