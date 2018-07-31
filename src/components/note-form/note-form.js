import React from 'react';
import PropTypes from 'prop-types';
import './note-form.scss';

const defaultState = {
  title: '',
  description: '',
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // this bracket notation denotes a computed value or a dynamic property name
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>title
        <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label>description
        <input
            type="text"
            name="description"
            placeholder="enter description here"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Create Note</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleAddNote: PropTypes.func,
};
