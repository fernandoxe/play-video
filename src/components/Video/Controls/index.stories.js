import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Controls } from '.';

export default {
  title: 'Components/Video/Controls',
  component: Controls,
};

const Template = (args) => <BrowserRouter><Controls {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  currentTime: 0,
  duration: 1000 * 60 * 10,
};
