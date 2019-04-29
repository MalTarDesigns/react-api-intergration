import React from "react";

export default class FavoriteShows extends React.Component {
  getFavoriteShowsByUserId = userId => {
    return this.props.shows.map(show => {
      if (show.category === userId) {
        console.log(show);

        return show;
      }
    });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h3>Broadway Plays</h3>
        <ul className="list-group">
          {this.props.shows
            .filter(show => show.category === "broadway")
            .map((show, index) => (
              <li key={index} className="list-group-item">
                {show.title}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
