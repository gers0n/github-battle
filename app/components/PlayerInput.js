import React from "react";
import PropTypes from "prop-types";

export class PlayerInput extends React.Component {
  state = {
    username: "",
  };
  handleChange = (event) => {
    var value = event.target.value;
    this.setState(function () {
      return {
        username: value,
      };
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  };
  render() {
    return (
      <div className="player">
        <form className="column player-inputs " onSubmit={this.handleSubmit}>
          <label className="player-label " htmlFor="username">
            {this.props.label}
          </label>
          <br />
          <input
            id="username"
            placeholder="github username"
            type="text"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className="btn dark-btn"
            type="submit"
            disabled={!this.state.username}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// PlayerInput.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired
// };
