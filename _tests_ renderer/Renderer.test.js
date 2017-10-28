import 'react-native';
import React from 'react';
import App from '../App';

import Createevents from '../client/createevents';

import Entryevent from '../client/entryevent';

import List from '../client/list';

import logInOrgs from '../client/logInOrgs';

import logInUseres from '../client/logInUsers';

import UserSignUp from '../client/userSignUp';

import Navbar from '../client/navbar';

import renderer from 'react-test-renderer';
 	
describe('Client test',() =>{
	
  it('shows main component', () =>{
  	const tree = renderer.create(
    	<App />
  	).toJSON();

  	expect(tree).toMatchSnapshot();
  });

  it('shows list of events', () => {
  	const tree = renderer.create(
    	<List />
  	).toJSON();

  	expect(tree).toMatchSnapshot();
  });

  it('shows event informations', () => {
  	const tree = renderer.create(
    	<Entryevent />
  	).toJSON();

  	expect(tree).toMatchSnapshot();
  });

  it('after done shows org profile', () => {
  	const tree = renderer.create(
    	<logInOrgs />
  	).toJSON();

  	expect(tree).toMatchSnapshot();
  });

  it('after done shows events page', () => {
  	const tree = renderer.create(
    	<logInUseres />
  	).toJSON();

  	expect(tree).toMatchSnapshot();
  });

  it('shows sign up page for users', () => {
  	const tree = renderer.create(
    	<UserSignUp />
  	).toJSON();

  	expect(tree).toMatchSnapshot();
  });

  it('shows sign up page for users', () => {
    const tree = renderer.create(
      <Navbar />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


});