import { color, number, text, array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { defaultColor } from '../src/_contants';
import ParagraphPlaceholder from '../src/ParagraphPlaceholder';

const stories = storiesOf('Components', module);

stories.add(
    'ParagraphPlaceholder',
    () => (
        <ParagraphPlaceholder
            rows={number('rows', 3)}
            color={color('color', defaultColor)}
            lineSpacing={text('lineSpacing', '0.7em')}
            widths={array('widths', [97, 100, 94, 90, 98, 95, 98, 40])}
        />
    ),
    { info: { inline: true } },
);
