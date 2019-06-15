import * as PropTypes from 'prop-types';
import React, { FC } from 'react';
import { defaultColor } from './_contants';

export type Props = {
    color?: string;
    style?: React.CSSProperties;
    className?: string;
};

const RoundShape: FC<Props> = ({ className, style, color = defaultColor }) => (
    <div
        className={className}
        style={{
            backgroundColor: color,
            borderRadius: '500rem',
            width: '100%',
            height: '100%',
            ...style,
        }}
    />
);

if (process.env.NODE_ENV !== 'production') {
    RoundShape.propTypes = {
        color: PropTypes.string.isRequired,
        className: PropTypes.string,
        style: PropTypes.object,
    };
}

export default RoundShape;
