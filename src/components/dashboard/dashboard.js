import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import NoteList from '../note-list/note-list';
import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };
  }

  handleAddNote = (note) => {
    if (note.title === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();
    note._id = uuid();
    note.editing = false;
    note.finished = false;
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note], // this spread operator makes a copy of the array, then we add a new expense to the array, this is basically how "concat" works
        error: null,
      };
    });
  }

  handleUpdateNote = (noteToUpdate) => {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => (note._id === noteToUpdate._id ? noteToUpdate : note)),
      };
    });
  }

  handleRemoveNote = (deleteNoteId) => {
    this.setState({
      notes: this.state.notes.filter(note => note._id !== deleteNoteId),
    });
  }

  render() {
    return (
      <section className="dashboard">
        <NoteForm handleAddNote={ this.handleAddNote } />
        { 
          this.state.error && <h2 className="error">You must enter a title.</h2>
        }
        <NoteList 
          notes={ this.state.notes }
          handleRemoveNote={ this.handleRemoveNote }
          handleUpdateNote={ this.handleUpdateNote }
        />
      </section>
    );
  }
}
