import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';

export default class NoteItem extends React.Component {
  render() {
    const { note, removeNote, handleUpdateNote } = this.props;
    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = (noteToUpdate) => {
      return handleUpdateNote({ ...note, ...noteToUpdate, editing: false });
    };

    return (
      <div className="note-item" data-cy="note-item">
        <strong>{note.title}:</strong> {note.description}
        <button 
          onClick={() => removeNote(this.props.note._id)} data-cy="note-item-btn">
          Delete
        </button>
        <button 
          onClick={showModal}
          data-cy="note-item-btn">
          Update
        </button>
        <Modal 
          show={note.editing}
          handleClose={hideModal}
        >
          <h3>Editing {note.title}</h3>
          <NoteForm 
            handleAddNote={updateAndClose}
            note={note}
          />
        </Modal>
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  removeNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
