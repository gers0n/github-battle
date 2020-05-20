import React from "react";
import PropTypes from "prop-types";
import { ThemeConsumer } from "../contexts/theme";
import { FaTimesCircle } from 'react-icons/fa'

const PlayerPreview = ({avatar, label, username, onReset}) => {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className='column player'>
        <h3 className='player-label'>{label}</h3>
        <div className={`row bg-${theme}`}>
          <div className='player-info'>
            <img
              className='avatar-small'
              src={avatar}
              alt={`Avatar for ${username}`}
            />
            <a
              href={`https://github.com/${username}`}
              className='link'>
                {username}
            </a>
          </div>
          <button className='btn-clear flex-center' onClick={onReset}>
            <FaTimesCircle color='rgb(194, 57, 42)' size={26} />
          </button>
        </div>
      </div>
      )}
    </ThemeConsumer>
  );
};

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default PlayerPreview;
