import React from "react";
import "./HeroApi.scss";
import HeroFilter from "../DotaAPI/HeroFilter";
import getApi from "../DotaAPI/FetchFunction";

export default class HeroApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    // fetch("https://api.opendota.com/api/heroStats")
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       items: json,
    //       isLoaded: true
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    this.setState({
      items: await getApi("https://api.opendota.com/api/heroStats"),
      isLoaded: true
    });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div>
        <div className={`hero-container-list`}>
          <h3>Strength</h3>
          <HeroFilter heroInfo={items} heroAtt={"str"} />
          <h3>Agility</h3>
          <HeroFilter heroInfo={items} heroAtt={"agi"} />
          <h3>Intelligent</h3>
          <HeroFilter heroInfo={items} heroAtt={"int"} />
        </div>
      </div>
    );
  }
}
