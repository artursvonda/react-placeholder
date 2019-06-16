import * as PropTypes from 'prop-types';
import React, { CSSProperties, FC } from 'react';
import { defaultColor } from './_contants';
import TextRow from './TextRow';

export type Props = {
    /** Number of rows to display */
    rows: number;
    /**
     * Placeholder color
     *
     * @default "#CDCDCD"
     */
    color?: string;
    /** Spacing between placeholder lines */
    lineSpacing?: string | number;
    /**
     * Array of relative widths of each row
     *
     * @default [97, 100, 94, 90, 98, 95, 98, 40]
     **/
    widths?: number[];
    /** Custom style */
    style?: CSSProperties;
    /** Class for root element */
    className?: string;
};

const getRows = ({
    rows,
    lineSpacing,
    color = defaultColor,
    widths = [97, 100, 94, 90, 98, 95, 98, 40],
}: Props) =>
    [...Array(rows).keys()].map(i => (
        <TextRow
            color={color}
            style={{
                maxHeight: `${100 / (rows * 2 - 1)}%`,
                width: `${widths[(i + widths.length) % widths.length]}%`,
            }}
            lineSpacing={i !== 0 ? lineSpacing : 0}
            key={i}
        />
    ));

const ParagraphPlaceholder: FC<Props> = ({ style, className, ...props }) => (
    <div className={className} style={style}>
        {getRows(props)}
    </div>
);

if (process.env.NODE_ENV !== 'production') {
    ParagraphPlaceholder.propTypes = {
        rows: PropTypes.number.isRequired,
        color: PropTypes.string,
        lineSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        widths: PropTypes.arrayOf(PropTypes.number) as PropTypes.Requireable<
            // Need this manual type hack because WeakValidation of propTypes adds null as possible
            // type but we don't really want to add null to our Props type
            number[] | null | undefined
        >,
        style: PropTypes.object,
        className: PropTypes.string,
    };
}

export default ParagraphPlaceholder;
