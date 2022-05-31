import React, { Component } from "react";
import Team from "./team";

class Teams extends Component {
  state = {
    teams: [
      { name: "team 1", players: [{ name: "t-1-p-1", age: "12" }] },
      { name: "team 2", players: [{ name: "t-2-p-1", age: "22" }] },
    ],
  };

  handleAddTeam = () => {
    const teams = [
      ...this.state.teams,
      { name: "", players: [{ name: "", age: "" }] },
    ];

    this.setState({
      teams,
    });
  };

  handleRemoveTeam = (index) => {
    const teams = [...this.state.teams];
    teams.splice(index, 1);

    this.setState({ teams });
  };

  handleTeamChange = (index, { currentTarget: input }) => {
    const name = input.name;
    const value = input.value;
    const teams = [...this.state.teams];

    teams[index][name] = value;

    this.setState({ teams });
  };

  handleRemovePlayer = (teamIndex, playerIndex) => {
    const teams = [...this.state.teams];

    teams[teamIndex].players.splice(playerIndex, 1);

    this.setState({ teams });
  };

  handlePlayerChange = (teamIndex, playerIndex, { currentTarget: input }) => {
    const name = input.name;
    const value = input.value;
    const teams = [...this.state.teams];

    teams[teamIndex].players[playerIndex][name] = value;

    this.setState({ teams });
  };

  handleAddPlayer = (teamIndex) => {
    const teams = [...this.state.teams];

    teams[teamIndex].players = [
      ...teams[teamIndex].players,
      { name: "", age: "" },
    ];

    this.setState({ teams });
  };

  submit = () => console.log(this.state);

  render() {
    const { teams } = this.state;

    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleAddTeam}>
          Add New Team
        </button>
        {teams.map((team, teamIndex) => (
          <div className="mb-5" key={teamIndex}>
            <Team
              value={team}
              index={teamIndex}
              onChange={(event) => this.handleTeamChange(teamIndex, event)}
              onAddPlayer={() => this.handleAddPlayer(teamIndex)}
              onRemoveTeam={() => this.handleRemoveTeam(teamIndex)}
              onPlayerChange={(playerIndex, event) =>
                this.handlePlayerChange(teamIndex, playerIndex, event)
              }
              onDeletePlayer={(playerIndex) =>
                this.handleRemovePlayer(teamIndex, playerIndex)
              }
            />
          </div>
        ))}

        <button type="button" className="btn btn-success" onClick={this.submit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Teams;
