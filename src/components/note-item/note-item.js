import React from 'react';
import PropTypes from 'prop-types';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick;
  }

  handleClick() {
    this.props.removeNote(this.props.note._id);
  }

  render() {
    const { title, description } = this.props.note;
    return (
      <li className="note-item">
        {title}
        {description}
        <input
          type="button"
          value="delete"
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

NoteItem.propTypes = {
  removeNote: PropTypes.func,
  note: PropTypes.object,
};
