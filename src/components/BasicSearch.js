import React, { Component } from "react";
import axios from "axios";

class BasicSearch extends Component() {
  state = {
    noGame: "No game found.",
    apiPrefix: "na1.api.riotgames.com",
    apiSuffix: "/lol/spectator/v4/active-games/by-summoner/{encryptedSummonerId}",
    apiKey: "RGAPI-aed0ff68-5ceb-4db5-a75a-0bf91bcdbdb1",
    myID: "ABoj65izE0NLrwzMqczkpq0ug8eYomlFZnsmiuZTjnVIeTo"
  };

  componentWillMount = () => {};

  ritoApi= () => {
      axios.get(apiPrefix + apiSuffix, {
          params: {
            
          }
      });
  };
}

module.exports = BasicSearch;
