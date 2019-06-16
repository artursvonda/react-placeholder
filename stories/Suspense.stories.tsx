import { storiesOf } from '@storybook/react';
import React, { ButtonHTMLAttributes, lazy, Suspense, useReducer } from 'react';
import MediaPlaceholder from '../src/MediaPlaceholder';

const stories = storiesOf('Examples', module);

const getLazyComponent = () =>
    lazy(
        () =>
            new Promise<{ default: any }>(resolve => {
                setTimeout(() => {
                    resolve({
                        default: ({ onClick }: ButtonHTMLAttributes<unknown>) => (
                            <div>
                                Lazy loaded <button onClick={onClick}>Try again</button>
                            </div>
                        ),
                    });
                }, 1000);
            }),
    );

const SuspensfulComponent = () => {
    const [i, forceReRender] = useReducer(s => s + 1, 0);
    const LazyComponent = getLazyComponent();

    return (
        <Suspense key={i} fallback={<MediaPlaceholder rows={3} />}>
            <LazyComponent onClick={forceReRender} />
        </Suspense>
    );
};

stories.add('Suspense', () => <SuspensfulComponent />);
