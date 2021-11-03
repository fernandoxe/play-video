import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Progress } from '.';

export default {
  title: 'Components/Video/Controls/Progress',
  component: Progress,
};

const Template = (args) => <BrowserRouter><Progress {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
};
