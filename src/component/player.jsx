import Input from "../common/input";

function Player({ value, teamIndex, playerIndex, onDeletePlayer, onChange }) {
  return (
    <div className="row align-items-end my-1">
      <div className="col-5">
        <Input
          name="name"
          label="Player Name"
          id={`nameInput-team-${teamIndex}-player-${playerIndex}`}
          value={value.name}
          onChange={onChange}
        />
      </div>
      <div className="col-5">
        <Input
          name="age"
          label="Player Age"
          id={`ageInput-team-${teamIndex}-player-${playerIndex}`}
          value={value.age}
          onChange={onChange}
        />
      </div>
      <div className="col-2">
        <button className="btn btn-danger" onClick={onDeletePlayer}>
          Delete Player
        </button>
      </div>
    </div>
  );
}

export default Player;
