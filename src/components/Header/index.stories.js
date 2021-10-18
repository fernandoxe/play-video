import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <BrowserRouter><Header {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
};
