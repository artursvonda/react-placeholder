import { storiesOf } from '@storybook/react';
import React from 'react';
import { defaultColor } from '../src/_contants';
import MediaPlaceholder from '../src/MediaPlaceholder';

import { number, color } from '@storybook/addon-knobs';

const stories = storiesOf('Components', module);

stories.add(
    'MediaPlaceholder',
    () => <MediaPlaceholder rows={number('rows', 3)} color={color('color', defaultColor)} />,
    { info: { inline: true } },
);
