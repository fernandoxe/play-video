import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Progress } from '.';

export default {
  title: 'Components/Video/Controls/Progress',
  component: Progress,
};

const Template = (args) => <BrowserRouter><Progress {...args} /></BrowserRouter>;

let value = 0;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 5 * 60 * 1000,
  value,
};
