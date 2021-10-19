import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SeriesList } from '.';

export default {
  title: 'Components/SeriesList',
  component: SeriesList,
};

const series = [
  {
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
      {
        name: 'Loki.S01E05',
        description: 'Journey into Mystery',
        size: '1.11GB',
        duration: '00:48:29',
        endingDuration: '292',
      },
      {
        name: 'Loki.S01E06',
        description: 'For All Time. Always.',
        size: '1GB',
        duration: '00:45:22',
        endingDuration: '292',
      },
    ],
  },
];

const Template = (args) => <BrowserRouter><SeriesList {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  series,
};
