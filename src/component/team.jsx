import Input from "../common/input";
import Player from "./player";

function Team({
  value,
  index,
  onChange,
  onAddPlayer,
  onRemoveTeam,
  onPlayerChange,
  onDeletePlayer,
}) {
  return (
    <>
      <div className="row align-items-end">
        <div className="col-8">
          <Input
            name="name"
            label="Team Name"
            id={`nameInput-${index}`}
            onChange={onChange}
            value={value.name}
          />
        </div>
        <div className="col-4">
          <button className="btn btn-primary" onClick={onAddPlayer}>
            Add Players
          </button>
          <button className="btn btn-danger mx-2" onClick={onRemoveTeam}>
            Delete Team
          </button>
        </div>
      </div>

      {value.players.map((player, playerIndex) => {
        return (
          <Player
            value={player}
            key={playerIndex}
            playerIndex={playerIndex}
            teamIndex={index}
            onChange={(event) => onPlayerChange(playerIndex, event)}
            onDeletePlayer={() => onDeletePlayer(playerIndex)}
          />
        );
      })}
    </>
  );
}

export default Team;
