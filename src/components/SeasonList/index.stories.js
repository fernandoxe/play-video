import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SeasonList } from '.';

export default {
  title: 'Components/SeasonList',
  component: SeasonList,
};

const season = {
  name: 'Loki',
  description: 'Loki',
  season: 1,
  episodes: [
    {
      name: 'Loki.S01E01',
      description: 'Glorious Purpose',
      size: '1.11GB',
      duration: '00:50:20',
      endingDuration: '292',
    },
    {
      name: 'Loki.S01E02',
      description: 'The Variant',
      size: '1.22GB',
      duration: '00:53:12',
      endingDuration: '292',
    },
    {
      name: 'Loki.S01E03',
      description: 'Lamentis',
      size: '995MB',
      duration: '00:40:58',
      endingDuration: '292',
    },
    {
      name: 'Loki.S01E04',
      description: 'The Nexus Event',
      size: '1.04GB',
      duration: '00:47:40',
      endingDuration: '292',
    },
  ],
};

const Template = (args) => <BrowserRouter><SeasonList {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  season,
};
