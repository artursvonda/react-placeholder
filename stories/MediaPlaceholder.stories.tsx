import { withInfo } from '@storybook/addon-info';
import { color, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { defaultColor } from '../src/_contants';
import MediaPlaceholder from '../src/MediaPlaceholder';

const stories = storiesOf('Components', module);

stories.addParameters({
    options: {
        showPanel: true,
    },
});

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add(
    'MediaPlaceholder',
    () => <MediaPlaceholder rows={number('rows', 3)} color={color('color', defaultColor)} />,
    { info: { inline: true } },
);
