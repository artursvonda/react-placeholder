import { color, number, text, array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { defaultColor } from '../src/_contants';
import ParagraphPlaceholder from '../src/ParagraphPlaceholder';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Components', module);

stories.addParameters({
    options: {
        showPanel: true,
    },
});

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

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
