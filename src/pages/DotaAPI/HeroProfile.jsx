import React from "react";
import "./HeroApi.scss";
import HeroAbilities from "../DotaAPI/HeroAbilities";

export default class HeroProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      items: [],
      isLoaded: false
    };

    fetch("https://api.opendota.com/api/heroStats")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  winRate(win, total) {
    return 100 * (win / total);
  }

  render() {
    const { isLoaded, items, id } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

    const add = "http://cdn.dota2.com/";
    const index = items.findIndex(x => x.localized_name === id);
    const selectHero = items[index];
    let divine, anceint, legend, archon, crusader, guardian, herald;

    if (isLoaded) {
      herald = this.winRate(selectHero["1_win"], selectHero["1_pick"]);
      guardian = this.winRate(selectHero["2_win"], selectHero["2_pick"]);
      crusader = this.winRate(selectHero["3_win"], selectHero["3_pick"]);
      archon = this.winRate(selectHero["4_win"], selectHero["4_pick"]);
      legend = this.winRate(selectHero["5_win"], selectHero["5_pick"]);
      anceint = this.winRate(selectHero["6_win"], selectHero["6_pick"]);
      divine = this.winRate(selectHero["7_win"], selectHero["7_pick"]);
    }

    return (
      <div>
        <div className="container-profile">
          <div className="header-profile">
            <img className={`hero-profile m-5`} src={add + selectHero.img} />
            <div className={`hero-details`}>
              <p>Name : {selectHero.localized_name}</p>
              <p>
                <span>Strength : {selectHero.base_str} </span>
                <span>Agility : {selectHero.base_agi}</span>
                <span>Intelligent : {selectHero.base_int}</span>
              </p>
              <p>
                <span>
                  Attack : {selectHero.base_attack_min} -{" "}
                  {selectHero.base_attack_max}
                </span>
                <span>Movement Speed : {selectHero.move_speed}</span>
              </p>
              <HeroAbilities heroName={selectHero.name} />
            </div>
          </div>
          <div className="body-profile">
            <div>
              <h3>Win rate</h3>
              <table className={`hero-table`}>
                <tbody>
                  <tr>
                    <td>Herald</td>
                    <td className={`colorCart`}>
                      <div style={{ width: herald + "%" }}>
                        {herald.toFixed(2)}%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Guardian</td>
                    <td className={`colorCart`}>
                      <div style={{ width: guardian + "%" }}>
                        {" "}
                        {guardian.toFixed(2)}%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Crusader</td>
                    <td className={`colorCart`}>
                      <div style={{ width: crusader + "%" }}>
                        {crusader.toFixed(2)}%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Archon</td>
                    <td className={`colorCart`}>
                      <div style={{ width: archon + "%" }}>
                        {archon.toFixed(2)}%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Legend</td>
                    <td className={`colorCart`}>
                      <div style={{ width: legend + "%" }}>
                        {legend.toFixed(2)}%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Ancient</td>
                    <td className={`colorCart`}>
                      <div style={{ width: anceint + "%" }}>
                        {anceint.toFixed(2)}%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Divine </td>
                    <td className={`colorCart`}>
                      <div style={{ width: divine + "%" }}>
                        {divine.toFixed(2)}%
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button onClick={this.props.history.goBack}
                className="btn btn-dark">Back</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
