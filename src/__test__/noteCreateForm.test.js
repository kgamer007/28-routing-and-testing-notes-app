import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from '../components/note-form/note-form';

configure({ adapter: new Adapter() });

describe('note-form testing', () => {
  let mountedNoteForm;
  beforeEach(() => {
    // "mount" will actually mount the component directly to the DOM even though we don't see it
    mountedNoteForm = mount(<NoteForm />);
  });
  afterEach(() => {
    // after each test, we take the component out of the DOM to complete our setup/teardown test process
    mountedNoteForm.unmount();
  });

  test('Simple test for initial state', () => {
    expect(mountedNoteForm.state('title')).toBe('');
    expect(mountedNoteForm.state('description')).toBe('');
  });

  test('new note to state', () => {
    const mockNote = { title: 'some title', description: 'some description' };
    mountedNoteForm.setState(mockNote);
    expect(mountedNoteForm.state()).toEqual(mockNote);
    expect(mountedNoteForm.state('title')).toEqual(mockNote.title);
    expect(mountedNoteForm.state('body')).toEqual(mockNote.body);
  });
});
