import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
addDecorator(withInfo);

configure(loadStories, module);
