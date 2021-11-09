import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Timer } from '.';

export default {
  title: 'Components/Video/Controls/Timer',
  component: Timer,
};

const Template = (args) => <BrowserRouter><Timer {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  currentTime: 4000,
  duration: 204000,
};
