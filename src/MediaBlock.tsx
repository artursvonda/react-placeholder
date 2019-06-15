import * as PropTypes from 'prop-types';
import React, { FC } from 'react';
import { defaultColor } from './_contants';
import RoundShape from './RoundShape';
import TextBlock from './TextBlock';

export type Props = {
    rows: number;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
};

const MediaBlock: FC<Props> = ({ className, style, color = defaultColor, rows }) => (
    <div className={className} style={{ display: 'flex', ...style }}>
        <RoundShape
            color={color}
            style={{
                minHeight: 55,
                width: 55,
                minWidth: 55,
                marginRight: 10,
            }}
        />
        <TextBlock color={color} rows={rows} />
    </div>
);

if (process.env.NODE_ENV !== 'production') {
    MediaBlock.propTypes = {
        rows: PropTypes.number.isRequired,
        color: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
    };
}

export default MediaBlock;
