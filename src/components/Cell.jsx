import React from 'react';
import classNames from 'classnames';

function Cell({value, isHighlight, clickShow}) {
    const cellClasses = classNames({
        cell: true,
        winner: isHighlight,
    })

    const cellContentClasses = classNames({
        "cell-content": true,
        populated: value,
    })

    return (
        <button className={cellClasses} onClick={clickShow}>
          <span className={cellContentClasses}>{value}</span>
        </button>
    );
}

export default Cell;