import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Video } from '.';

export default {
  title: 'Components/Video',
  component: Video,
};

const Template = (args) => <BrowserRouter><Video {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  name: 'Loki.S01.E01',
};
