import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';
import './note-list.scss';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {},
    };
  }

  handleRemove = () => {
    return (
      <ul>
        {
          this.props.notes.map((note) => {
            return (
              <NoteItem 
              note={note}
              removeNote={ this.props.handleRemoveNote }
              key={note._id}
              />
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="note-list">
      { this.handleRemove() }
      <p>Your Note is removed</p>
      </section>
    );
  }
}

NoteList.propTypes = {
  handleRemoveNote: PropTypes.func,
  notes: PropTypes.func,
};
