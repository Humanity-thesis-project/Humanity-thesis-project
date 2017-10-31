import 'react-native';
import React from 'react';


import App from '../App';

import SignUp from '../client/signUp';

import SignIn from '../client/signIn';

import UserSignUp from '../client/userSignUp';

import OrgSignUp from '../client/orgSignUp';

import logInOrgs from '../client/logInOrgs';

import Navbar from '../client/navbar';

import Orgprofile from '../client/orgprofile';

import List from '../client/list';

import Createevents from '../client/createevents';

import Entryevent from '../client/entryevent';

import EventPage from '../client/EventPage';

import logInUseres from '../client/logInUsers';

import Userprofile from '../client/userprofile';

import renderer from 'react-test-renderer';

	
describe('Client test',() =>{
	
  it('shows main component', () =>{
  	const tree = renderer.create(
    	<App />
  	).toJSON();

  	expect(tree).toMatchSnapshot();
  });

  it('After user/org press on Signup should see a new component to choose he/she vulantair or organization ', () =>{
    const tree = renderer.create(
      <SignUp />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('After user/org press on Signin should see a new component to choose he/she vulantair or organization ', () =>{
    const tree = renderer.create(
      <SignIn />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('After user/org press on user Signup should see a new component to fill his informations and press Signup', () =>{
    const tree = renderer.create(
      <UserSignUp />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('After user/org press on Org Signup should see a new component to fill orgnization informations and press Signup', () =>{
    const tree = renderer.create(
      <OrgSignUp />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  }); 

  it('After user/org press on Org Signin should see a new component to fill orgnization informations and press Signin', () =>{
    const tree = renderer.create(
      <logInOrgs />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('After user/org press on Sign in showld see the navbar', () =>{
    const tree = renderer.create(
      <Navbar />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  }); 

  it('After org press on Sign in showld see orgnization profile', () =>{
    const tree = renderer.create(
      <Orgprofile />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('After user/org press on Events from navbar showld see the events', () =>{
    const tree = renderer.create(
      <List />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });    

  it('After org press on creat new event should see new component to fill event infos and press submit', () =>{
    const tree = renderer.create(
      <Createevents />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('the events in list event showld come from entry event component and show them with list component', () =>{
    const tree = renderer.create(
      <Entryevent />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('when user/org press on current event showld seee the rest of event informations', () =>{
    const tree = renderer.create(
      <EventPage />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('After User press on User Signin should see a new component to fill his informations and press Signin', () =>{
    const tree = renderer.create(
      <logInUseres />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('After User fill his info and press on Sign in showld see his profile', () =>{
    const tree = renderer.create(
      <Userprofile />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});