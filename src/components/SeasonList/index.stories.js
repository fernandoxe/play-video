import React from 'react';

import { SeasonList } from '../../pages/Season';

export default {
  title: 'Components/SeasonList',
  component: SeasonList,
};

const episodes = [
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
];

const Template = (args) => <SeasonList {...args} />;

export const Default = Template.bind({});
Default.args = {
  episodes,
};
