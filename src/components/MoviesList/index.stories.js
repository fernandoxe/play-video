import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MoviesList } from '.';

export default {
  title: 'Components/MoviesList',
  component: MoviesList,
};

const movies = [
  {
    name: 'Black.Widow.2021',
    description: 'Black Widow 2021',
    size: '2.2GB',
    duration: '02:13:55',
    endingDuration: '0',
  },
  {
    name: 'Evangelion.1.0.You.Are.Not.Alone.2007',
    description: 'Evangelion 1.0 You Are (Not) Alone 2007',
    size: '1.92GB',
    duration: '01:40:57',
    endingDuration: '0',
  },
];

const Template = (args) => <BrowserRouter><MoviesList {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  movies,
};
