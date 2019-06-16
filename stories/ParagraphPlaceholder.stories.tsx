import { storiesOf } from '@storybook/react';
import React from 'react';
import { defaultColor } from '../src/_contants';
import ParagraphPlaceholder from '../src/ParagraphPlaceholder';

import { number, color } from '@storybook/addon-knobs';

const stories = storiesOf('Components', module);

stories.add(
    'ParagraphPlaceholder',
    () => <ParagraphPlaceholder rows={number('rows', 3)} color={color('color', defaultColor)} />,
    { info: { inline: true } },
);
