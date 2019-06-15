import * as PropTypes from 'prop-types';
import React, { FC } from 'react';
import { defaultColor } from './_contants';

export type Props = {
    color?: string;
    className?: string;
    style?: React.CSSProperties;
};

const RectShape: FC<Props> = ({ className, style, color = defaultColor }) => (
    <div
        className={className}
        style={{
            backgroundColor: color,
            width: '100%',
            height: '100%',
            marginRight: 10,
            ...style,
        }}
    />
);

if (process.env.NODE_ENV !== 'production') {
    RectShape.propTypes = {
        color: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
    };
}

export default RectShape;
