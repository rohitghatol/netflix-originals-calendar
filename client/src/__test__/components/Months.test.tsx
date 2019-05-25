// Month.react.test.js
import React from 'react';
import {Month} from '../../components/Month';
import renderer from 'react-test-renderer';

test('Month renders calendar month', () => {
  const component = renderer.create(
    <Month month={1} year={2019} launches={{}} next={()=>{}} prev={()=>{}}/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
