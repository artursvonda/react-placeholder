import * as PropTypes from 'prop-types';
import React, { FC } from 'react';
import { defaultColor } from './_contants';

export type Props = {
    maxHeight?: string | number;
    invisible?: boolean;
    className?: string;
    color: string;
    style?: React.CSSProperties;
    lineSpacing?: string | number;
};

const TextRow: FC<Props> = ({
    className,
    maxHeight,
    color = defaultColor,
    lineSpacing = '0.7em',
    style,
}) => (
    <div
        className={className}
        style={{
            maxHeight,
            width: '100%',
            height: '1em',
            backgroundColor: color,
            marginTop: lineSpacing,
            ...style,
        }}
    />
);

if (process.env.NODE_ENV !== 'production') {
    TextRow.propTypes = {
        maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        color: PropTypes.string.isRequired,
        lineSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        style: PropTypes.object,
    };
}

export default TextRow;
