import React from "react";

import FavoriteShows from "./FavoriteShows";
import showData from "./data/shows";

class ProfileHome extends React.Component {
  state = {
    shows: showData
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ shows: data });
    //     console.log(this.state.shows);
    //   });
  }

  //   getFavoriteShowsByUserId = userId => {
  //     this.state.shows.map(show => {
  //       if (show.category === userId) {
  //         console.log(show);

  //         return show;
  //       }
  //     });
  //   };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <FavoriteShows shows={this.state.shows} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHome;
