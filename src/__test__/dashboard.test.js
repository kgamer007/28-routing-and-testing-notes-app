import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;
  beforeEach(() => {
    // "mount" will actually mount the component directly to the DOM even though we don't see it
    mountedDashboard = mount(<Dashboard />);
  });
  afterEach(() => {
    // after each test, we take the component out of the DOM to complete our setup/teardown test process
    mountedDashboard.unmount();
  });

  test('Simple test for initial state', () => {
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('Adding a new note to the state', () => {
    const mockNote = [{ title: 'notes', description: 'notes', _id: 123 }];
    mountedDashboard.setState({ notes: mockNote });
    expect(mountedDashboard.state('notes')).toEqual(mockNote);
    expect(mountedDashboard.state('notes')).toHaveLength(1);
  });
});
