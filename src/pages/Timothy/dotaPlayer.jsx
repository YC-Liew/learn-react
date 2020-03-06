import React from "react";
import "./dotaPlayer.scss";

export default class DotaPlayer extends React.Component {
  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {
    super(props);

    this.state = {
      pid: this.props.match.params.id,
      player: [],
      match: false
    };
  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {
    fetch(`https://api.opendota.com/api/players/${this.state.pid}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          player: data,
          isLoaded: true
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
   * render
   *
   * Render UI
   */
  render() {
    const { id, isLoaded, player } = this.state;
    const user = player;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="player">
        <img src={user.profile.avatarfull} alt="" />
        <h3 className="player-nname">{user.profile.name}</h3>
        <h5 className="player-name">{user.profile.personaname}</h5>
        <div className="player-rank">
          <div>
            Rank Tier: <span>{user.ranktier ? user.ranktier : "N/A"}</span>
          </div>
          <div>
            Solo Rank:
            <span>
              {user.solo_competitive_rank ? user.solo_competitive_rank : "N/A"}
            </span>
          </div>
          <div>
            MMR:
            <span>
              {user.mmr_estimate.estimate ? user.mmr_estimate.estimate : "N/A"}
            </span>
          </div>
        </div>
        <p className="steam">
          <a href={user.profile.profileurl ? user.profile.profileurl : "#"}>
            View Steam Profile
          </a>
        </p>
      </div>
    );
  }
}
