import * as PropTypes from 'prop-types';
import React, { CSSProperties, FC } from 'react';
import { defaultColor } from './_contants';
import RoundShape from './RoundShape';
import ParagraphPlaceholder from './ParagraphPlaceholder';

export type Props = {
    /** Number of rows to display in paragraph */
    rows: number;
    /**
     * Placeholder color
     *
     * @default "#CDCDCD"
     */
    color?: string;
    /** Custom style */
    style?: CSSProperties;
    /** Class for root element */
    className?: string;
};

const MediaPlaceholder: FC<Props> = ({ className, style, color = defaultColor, rows }) => (
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
        <ParagraphPlaceholder color={color} rows={rows} style={{ width: '100%' }} />
    </div>
);

if (process.env.NODE_ENV !== 'production') {
    MediaPlaceholder.propTypes = {
        rows: PropTypes.number.isRequired,
        color: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
    };
}

export default MediaPlaceholder;
