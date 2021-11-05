import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Play } from '.';

export default {
  title: 'Components/Video/Controls/Play',
  component: Play,
};

const Template = (args) => <BrowserRouter><Play {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
};
