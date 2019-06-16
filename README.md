# React Placeholder

A light React component library to provide placeholders while content is loading. Suited for use
with lazy and Suspense.  

![image](https://cloud.githubusercontent.com/assets/691940/24140211/78406120-0e1f-11e7-9738-af2b2434c50e.png)

```jsx
import React, { lazy, Suspense } from 'react';
import { MediaPlaceholder } from 'react-pure-placeholder';

const MyComponent = lazy(() => import('./MyComponent'));

React.renderComponent(
  <div>
    <Suspense placeholder={<MediaPlaceholder rows={7} />}>
      <MyComponent />
    </Suspense>
  </div>,
  document.body);
```

[**Storybook and Live Demo**](http://artursvonda.github.io/react-pure-placeholder)

### Install
```
npm install --save react-pure-placeholder
```

or

```
yarn add react-pure-placeholder
```

### 
